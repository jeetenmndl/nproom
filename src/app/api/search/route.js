import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";


// get specific search result 
export async function POST(req) {
    try {

        await dbConnect();
        const searchData = await req.json();

        
console.log("the request is",searchData)
        // if(params.id.length == 10){

        //     const user = await Rooms.find({"phone": params.id});

        //     return NextResponse.json({
        //         data: user
        //     }, {
        //         status: 200
        //     })
        // }
        // else{

        //     const user = await Rooms.find({"_id": params.id});

        //     return NextResponse.json({
        //         data: user
        //     }, {
        //         status: 200
        //     })
        // }

        return NextResponse.json({
                    data: searchData
                }, {
                    status: 200
                })


    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}