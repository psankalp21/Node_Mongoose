import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createClient } from "redis";
import session from "../database/models/session";



export default async function auth(req:Request,res:Response,next:NextFunction){
    const client = createClient()

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    const token: any = req.headers.authorization;
    const verifyToken :any = jwt.verify(token,'2201');
    
    if(verifyToken.id){
        let findSession:any = await client.get(`${verifyToken.id}_session`) || await session.find(verifyToken.id)

        if(findSession.length!=0){
            req.body.id= verifyToken.id;
            next()
        }else{
            res.send("Session out")
        }


    }else{
        res.send({message:"invalid token"})
    }

}