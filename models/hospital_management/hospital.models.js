import mongoose from "mongooose"
const adressSchema=new mongoose.Schema({
  adressLine1:
  {
    type:String,
    required:true,
  },
  adressLine2:
  {
    type:String,
    required:true,
  },
  city:
  {
    type:String,
    required:true,
  },
  pincode:
  {
    type:String,
    required:true,
  }
})
const Adress=mongoose.models("Adress",adressSchema)
const hospitalSchema=new mongoose.Schema({
  name:
  {
    type:String,
    required:true,
  },
  adress:
  {
    type=mongoose.Schema.Types.ObjectId,
    ref:"Adress"
  },
  specialisedIn:[
    {
      type:String
    }
  ]
},{timestamps:true})
export const Hospital=mongoose.models("Hospital",hospitalSchema)