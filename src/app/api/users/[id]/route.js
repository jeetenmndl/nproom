import dbConnect from "@/lib/dbConn";
import Users from "@/models/userModel";
import {NextResponse} from "next/server";


// get specific user 
export async function GET(req, {params}) {
    try {

        await dbConnect();

        const user = await Users.findOne({"phone": params.id});

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