import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    document:{
        type: String,
    },
    study:{
        type: String
    }
})

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;