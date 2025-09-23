import connect from "@/lib/db";
import User from "@/lib/models/users";
import { NextResponse } from "next/server";
import {Types} from "mongoose";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async () => {
    try{
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users),{status:200});
    }catch(err : any){
        return new NextResponse("Error in fetching users" + err .message, {status: 500});
    }
}

export const POST = async (request : Request) => {
    try{
        const body = request.json();
        await connect(); 
        const user = new User(body);
        await user.save();

        return new NextResponse(JSON.stringify({message: "User is created", user: user}), {status: 200});
    }catch(err : any){
        return new NextResponse('Error in creating user'+ err.message, {status: 500});
    }
}

export const PATCH = async (request: Request) => {
    try{
        const body = await request.json();
        const {userId,username} = body;

        await connect();

        if(!userId || !username){
           return new NextResponse(
             JSON.stringify({message: "Id or username not found!"}),{status: 400}
           );
        }

         if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(
             JSON.stringify({message: "Invalid user id"}),{status: 400}
           );
         }

        const updatedUser = await User.findOneAndUpdate(
            {_id: new ObjectId(userId)},
            {username: username},
            {new: true},
        )

        if(!updatedUser) {
            return new NextResponse(
             JSON.stringify({message: "User not found in the database!"}),{status: 400}
           );
        }

    }catch(err){
           return new NextResponse('Error in updatingc user'+ err.message, {status: 500});
    }
}