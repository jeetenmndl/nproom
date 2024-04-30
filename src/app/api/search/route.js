import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";


// get specific search result 
export async function POST(req) {
    try {

        await dbConnect();
        const searchData = await req.json();

        
console.log("the request is",searchData)



        if(searchData.type == "all" && searchData.rent=="all"){

            const rooms = await Rooms.find({"city": searchData.city});

            return NextResponse.json({
                data: rooms
            }, {
                status: 200
            })
        }
        else if(searchData.type == "all" && searchData.rent != "all"){

            const rooms = await Rooms.find({"city": searchData.city, "rent": {$lte:parseInt(searchData.rent)}});

            return NextResponse.json({
                data: rooms
            }, {
                status: 200
            })
        }
        else if(searchData.type != "all" && searchData.rent == "all"){
            const rooms = await Rooms.find({"city": searchData.city, "rooms.type": searchData.type});

            return NextResponse.json({
                data: rooms
            }, {
                status: 200
            })
        }
        else{
            const rooms = await Rooms.find({"city": searchData.city, "rooms.type": searchData.type,  "rent": {$lte:parseInt(searchData.rent)}});

            return NextResponse.json({
                data: rooms
            }, {
                status: 200
            })
        }

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!"+e },
            { status: 500 }
        )
    }
}