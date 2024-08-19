import {insertDab,getDat,fetchDB,updateDB,deleteDB,addToCartDB} from '../model/fruitDb.js'
import { fetchDb } from '../model/userDb.js'


const insertFru = async(req,res)=>{
    let {fruit_name,weight,amount} = req.body
    await insertDab(fruit_name,weight,amount)
    res.send('Inserted data sucessfully')
}

const fetchData = async(req,res)=>{
    res.json(await getDat())
}

const fetchFruit = async(req,res)=>{
    res.json(await fetchDB(req.params.id))
}

const updateDat = async (req,res)=>{
    let {fruit_name,weight,amount} = req.body
    let fruits = await updateDB(req.params.id)
    fruit_name?fruit_name=fruit_name:fruit_name=fruits.fruit_name
    weight?weight=weight:weight=fruits.weight
    amount?amount=amount:amount=fruits.amount
    res.json(await updateDB(fruit_name,weight,amount,req.params.id))
    
}

const deleteDat = async (req,res)=>{
    res.json(await deleteDB(req.params.id))
    console.log('Deleted successfully');
}

const addToCart = async (req,res)=>{
    console.log(req.body);
    let {user_id} = await fetchDb(req.body.user)
    console.log(user_id);
    await addToCartDB(user_id,req.body.id)
    res.json({message:"added to cart"})
}
export {insertFru,fetchData,fetchFruit,updateDat,deleteDat,addToCart}
