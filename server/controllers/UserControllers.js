import { Webhook } from "svix"
import userModel from "../models/UserModel.js"
const clerkWebhooks=async(require,res)=>{
  try{
    const webhook = new Webhook(process.env.CLERk_WEBHOOK_SECRET);
    await webhook.verify(JSON.stringify(req.body)),{
      "svix-id":req.headers["svix-id"],
      "svix-timestamp":req.headers["svix-timestamp"],
      "svix-signature":req.headers["svix-signature"]
    }
    const{data,type}=req.body
    switch(type){
      case 'user.created':{
        const userData={
          clerkId:data.id,
          email:data.email_addresses[0].email_address,
          photo:data.image_url,
          firstname:data.first_name,
          lastname:data.last_name
        }
        await userModel.create(userData)
        res.json({success:true,message:"User created successfully"})
        break;
      } 
      case 'user.updated':{
        // handle user creation event
        const userData={
          
          email:data.email_addresses[0].email_address,
          photo:data.image_url,
          firstname:data.first_name,
          lastname:data.last_name
        }
        await userModel.findByIdAndUpdate({clerkId:data.id},userData,{new:true})
        res.json({success:true,message:"User updated successfully"})
        break;
      } 
      case 'user.deleted':{
        // handle user creation event
        await userModel.findOneAndDelete({clerkId:data.id})
        res.json({success:true,message:"User deleted successfully"})
        break;
      }  
     
      default:
        console.log(`Unhandled webhook event type: ${type}`)
    }

  }catch(error){
  console,log(error.message)
  res.json({success:false,message:error.message})
  }
}
export default clerkWebhooks