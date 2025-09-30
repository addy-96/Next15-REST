import {NextRequest , NextResponse} from 'next/server';

export const GET = async (request : NextRequest)=>{
    try{
        console.log(request);
        const body = await request.json();
        if(!body){
            return new NextResponse(JSON.stringify({message: "error in parsing the body"}));
        }
        return new NextResponse(JSON.stringify({message: "hello jsjbfj"}),{status: 200});
    }catch(err){
        return new NextResponse(JSON.stringify({message: "byyy"}));
    }
}

export const POST = async (request : NextRequest) => {
    try{
        console.log(request);
        const body = await request.json();
        console.log('body is');

        const { id } = body;

        console.log(id);

        return new NextResponse(JSON.stringify({message: 'This is just normal response'}), {status: 200});   
    }catch(err){
        return new NextResponse(JSON.stringify ({message: 'This is from a eror resposne'}), {status : 400});
    }
}