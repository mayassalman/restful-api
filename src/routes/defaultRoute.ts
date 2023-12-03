import { Router,Request,Response } from "express";
export const defaultRoute=Router()

defaultRoute.get('/',(_req:Request,res:Response)=>{
    res.send("This is the home page..")
})