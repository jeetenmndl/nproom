import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";


// get specific user 
export async function GET(req, {params}) {
    try {

        await dbConnect();

        let info = params.id.slice(0,24)
        let type = params.id.slice(24)
        // console.log(info, type)
        
        // to get one room/ product page
        if(type == "room"){

            const room = await Rooms.findOne({"_id": info});

            return NextResponse.json({
                data: room
            }, {
                status: 200
            })
        }
        else{
            // to get all room associated with user / profile

            const rooms = await Rooms.find({"belongsTo": info});

            return NextResponse.json({
                data: rooms
            }, {
                status: 200
            })
        }


    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}