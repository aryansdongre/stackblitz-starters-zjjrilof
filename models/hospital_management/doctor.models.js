import mongoose from "mongooose"
import { Hospital } from "./hospital.models"
const workSchema=new mongoose.Schema({
  hospital:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  hours:
  {
    type:Number,
    required:true
  }
})
const doctorSchema=new mongoose.Schema({
  name:
  {
    type:String,
    required:true
  },
  salary:
  {
    type:String,
    required:true
  },
  qualification:
  {
    type:String,
    required:true,
  },
  experienceInYears:
  {
    type:Number,
    default:0,
  },
  worksInHospitals:[workSchema]
},{timestamps:true})
export const Doctor=mongoose.models("Doctor",doctorSchema)