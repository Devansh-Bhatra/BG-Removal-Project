import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  clerkId:{type:"string",required:"true",unique:"true"},
  email:{type:"string",required:"true",unique:"true"},
  photo:{type:"string",required:"true"},
  firstname:{type:"string"},
  lastname:{type:"string"},
  creditBalance:{type:Number,default:5}
})
const userModel= mongoose.models.user||mongoose.model("User",userSchema);
export default userModel;
