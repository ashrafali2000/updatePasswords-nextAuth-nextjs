import { updateUser } from "@/services/users";

export default async function handler(req,res){
  if(req.method !== "PATCH"){
   res.status(400).json({});
  }
  const {email,password} = req.body;
  try{
    const data = await updateUser(email,password);
    res.status(201).json(data);
  }catch(err){
    res.status(400).json({message: err.message})
  }
}