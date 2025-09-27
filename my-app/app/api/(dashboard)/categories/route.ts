import connect from "@/lib/db";
import User from "@/lib/models/users";
import Category from "@/lib/models/category";
import { NextRequest, NextResponse } from "next/server";
import {Types} from "mongoose";

export const GET = async (request: Request) => {
          
    try{ 
            const {searchParams} = new URL(request.url);
            const userId = searchParams.get("userID");

            if(!userId || Types.ObjectId.isValid(userId)){
            return new NextResponse(
                JSON.stringify({message: "Invalid os missing userId"}), {status: 400}
            );    
            }
           
            await connect();


    const user = await User.findById(userId);

    if(!user) {
        return new NextResponse(JSON.stringify({message: 'User not found in the datatbase'}),{status: 400});
    }

 
    const categories = await Category.find({
        user: new Types.ObjectId(userId),
    });
       
    return new NextResponse(JSON.stringify(categories),{status: 200});

    }catch(err : any){
        return new NextResponse("Error in categories" + err .message, {status: 500});
    }
}



