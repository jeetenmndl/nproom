import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema({
    belongsTo:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    neighbourhood:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    rent:{
        type: Number,
        required: true
    },
    rentType:{
        type: String,
        required: true
    },
    facilities:{
        type: Object,
        required: true
    },
    rooms:{
        type: Object,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rules: {
        type: Boolean,
    },
    disclosure:{
        type: String,
        required: true
    },
    photos:{
        type: Array,
        required: true
    }
})

const Rooms = mongoose.models.Rooms || mongoose.model("Rooms", roomsSchema);

export default Rooms;