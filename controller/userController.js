import {getData,fetchDb,insertDb,deleteDb,updateDb} from '../model/userDb.js'
import bcrypt from 'bcrypt'

const fetchDatas = async(req,res)=>{
    res.json(await getData())
}

const fetchUser = async(req,res)=>{
    res.json(await fetchDb(req.params.id))
}

const insertData = async(req,res)=>{
    let {name,surname,age,fav_coding_lang,fav_car,eye_color,username,password} = req.body
    bcrypt.hash(password,10,async (error,result)=>{
        if(error) throw error
        console.log(result);
        await insertDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,result)
        res.send('Inserted data sucessfully')
    })
}

const deleteData = async (req,res)=>{
    res.json(await deleteDb(req.params.id))
    console.log('Deleted successfully');
}

const updateData = async (req,res)=>{
    let {name,surname,age,fav_coding_lang,fav_car,eye_color} = req.body
    let users = await updateDb(req.params.id)
    name?name=name:name=users.name
    surname?surname=surname:surname=users.surname
    age?age=age:age=users.age
    fav_coding_lang?fav_coding_lang=fav_coding_lang:fav_coding_lang=users.fav_coding_lang
    fav_car?fav_car=fav_car:fav_car=users.fav_car
    eye_color?eye_color=eye_color:eye_color=users.eye_color
    res.json(await updateDb(name,surname,age,fav_coding_lang,fav_car,eye_color, req.params.id))
    
}

const loginUser = (req,res)=>{
    res.json({
        message:"You have signed in!!",
        token: req.body.token})
}
export {fetchDatas,fetchUser,insertData,deleteData,updateData,loginUser}