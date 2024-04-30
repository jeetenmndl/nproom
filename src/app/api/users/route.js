import dbConnect from "@/lib/dbConn";
import Users from "@/models/userModel";
import {NextResponse} from "next/server";

export async function GET(req) {
    try {

        await dbConnect();

        const user = await Users.find({});

        return NextResponse.json({
            data: user
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
        const userData = await req.json();
        const result = await Users.create(userData);

        return NextResponse.json({
            data: result._id
        }, {
            status: 201
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!"+e },
            { status: 500 }
        )
    }
}