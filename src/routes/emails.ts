import { Router,Request, Response } from "express";
 
import {  getAllUnreadEmailsSubjects } from "../services/email";
 
export const emailsRouter=Router()

 
emailsRouter.get('/emails',async (req:Request,res:Response)=>{
 
     res.json(await getAllUnreadEmailsSubjects())
})

 