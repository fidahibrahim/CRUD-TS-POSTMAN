import { RequestHandler } from "express";
import student from '../schema/students'

export const getAllStudents: RequestHandler = async (req,res,next)=>{
    try {
        const students = await student.find()
        if(students){
            return res.status(200).json({ message:'Data Successfully Retrieved', data:students })
        }
        return res.status(500).json({ message:'Data Retrieval Failed' })
    } catch (error) {
        next(error)
    }
}

export const NewStudent: RequestHandler = async (req,res,next) =>{
    try {
        const {studentId,name,gender,number} = req.body
        const newStudent = new student({ studentId,name,gender,number })
        await newStudent.save()
        if(newStudent){
            return res.status(201).json({ message:'Successfully Created', data:newStudent })
        }
        return res.status(500).json({ message:'Student Creation Failed' })
    } catch (error) {
        next(error)
    }
}

export const UpdateStudent: RequestHandler = async (req,res,next)=>{
    try {
        const {id} = req.params
        const { studentId,number } = req.body
        const existingStudent = await student.findById(id)
        if(!existingStudent){
            return res.status(400).json({ message:'Student Not Exist' })
        }
        const updateStudent = await student.findByIdAndUpdate(id,{studentId,number},{ new:true })
        if(updateStudent){
            return res.status(200).json({ message:'Successfully Updated', data:updateStudent })
        }
        return res.status(500).json({ message:'Student Updation Failed' })
    } catch (error) {
        next(error)
    }
}

export const DeleteData: RequestHandler = async (req,res,next)=>{
    try {
        const {id} = req.params
        const existingStudent = await student.findById(id)
        if(!existingStudent){
            return res.status(400).json({ message:'Student Not Exist' })
        }
        const deleteData = await student.findByIdAndDelete(id)
        if(deleteData){
            return res.status(200).json({ message:'Successfully Deleted', data:deleteData })
        }
        return res.status(500).json({ message:'StudentData Dletion Failed' })
    } catch (error) {
        next(error)
    }
}
