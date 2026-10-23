import mongoose from "mongooose"
const medicalRecordSchema=new mongoose.Schema({},{timestamps:true})
export const MedicalRecord=mongoose.models("MedicalRecord",medicalRecordSchema)