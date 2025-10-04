import {NextRequest, NextResponse} from 'next/server';

export const PATCH = async (request: Request, context: {params: any}) => {
    const categoryId = context.params.category;
    try{
      const body = await request.json();
      const { title } = body;
      

    }catch(err : any){
        return new NextResponse("Error in updating category" + err.message, {
            status: 500,
        })
    }
}

