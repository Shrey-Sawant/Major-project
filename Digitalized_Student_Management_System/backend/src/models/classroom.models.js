import mongoose, { Schema } from "mongoose";

const classroomSchema = new Schema({
    classname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    section: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
    },
    subject: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
    },
    year: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
    },
    owner: {
        type: String,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ],
    classCode:{
        type:String,
    },
    attendance:{
        type:[String],
        
    },
    assignment:[
        {
            title: { type: String, required: true },
            file:String,
            createdAt:Date
        }
    ],
    notice:[
        {
            description:{type:String,required:true},
            file:String,
            createdAt:Date
        }
    ],

}, { timestamps: true });

export const Classroom = mongoose.model("Classroom", classroomSchema);
