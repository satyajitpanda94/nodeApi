import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    userName:{
        type: String,
        require:true,
        min:3,
        max:20
    },
    age:{
        type: Number,
        require:true
    }
},
{
    timestamps:true,
}
)

export const User= new mongoose.model('User',UserSchema)