import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";

export async function GET(req) {
    try {

        await dbConnect();

        const room = await Rooms.find({});

        return NextResponse.json({
            data: room
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

export async function POST(req) {
    try {
        
        await dbConnect();
        const roomData = await req.json();
        const result = await Rooms.create(roomData);

        return NextResponse.json({
            data: result._id,
            posted: true
        }, {
            status: 201
        })

    }catch (e) {
        return NextResponse.json(
            {
                posted: false,
                message: "Server error, please try again!"+e },
            { status: 500 }
        )
    }
}