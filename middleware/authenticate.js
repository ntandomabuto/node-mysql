import {compare} from "bcrypt";
import { fetchDb } from "../model/userDb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()

const checkUser =async (req,res,next)=>{
    const {username,password}=req.body
    let pass = (await fetchDb(username)).password
    console.log(pass);
    compare (password,pass,(err,result)=>{
        if(result ==true){
            let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            req.body.token = token
            next()
            return
        }
        res.send('password incorrect')
    })
}

const verifyAToken = (req,res,next)=>{
    let {cookie} = req.headers
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1]
    // console.log(cookie);
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:'Token invalid'})
            return
        }else{
            // req.body.username = decoded.username
            req.body.user = decoded.username
            console.log(decoded);
        }
    })
    next()
}

export {checkUser,verifyAToken}