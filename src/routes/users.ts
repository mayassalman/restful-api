import { Router,Request, Response } from "express";
import { User } from "../modal/user";
import { addUser, getAllUsers, getUser } from "../services/user";
import { users } from "../mock/users";

export const userRouter=Router()

userRouter.post('/user',(req:Request,res:Response)=>{
    const {name,role,email}=req.body;
    const user:User={
        id:users.length+1,
        name,
        role,
        email:email || ""
    }
    
 addUser(user)
res.status(201).send("User added successfully..")
        
})

userRouter.get('/user',(req:Request,res:Response)=>{
    if (!users){
        res.status(404).send("No users there yet.. :(")
    }
    res.json(getAllUsers())
})

userRouter.get('/user/:id',(req:Request,res:Response)=>{
    const {id}=req.params
   const user:User= getUser(parseInt(id))

   if (!user) {
    res.status(404).end(`Couldn't find the user with id=${id}`)
    console.log(`Couldn't find the user with id=${id}`)
   }else{

       console.log("User returned successfully.")
       res.json(user)
    }
})
userRouter.param("id",(req:Request,res:Response,next,id)=>{
    console.log(`Looking for user with id=${id}`)
    next();
})