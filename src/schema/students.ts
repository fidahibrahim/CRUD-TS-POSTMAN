import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    studentId: { type: String,required: true },
    name: { type: String,required: true },
    gender: { type: String,required: true },
    number: { type: String,required: true }
})

export default model('student',studentSchema)