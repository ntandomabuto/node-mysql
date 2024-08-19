import {pool} from '../config/config.js'

const insertDab = async (fruit_name,weight,amount)=>{
    let [data] = await pool.query('INSERT INTO fruits (fruit_name,weight,amount) VALUES (?,?,?)',[fruit_name,weight,amount])
    return data
}

const getDat = async ()=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}

const fetchDB = async  (id)=>{
    let [[data]] = await pool.query('SELECT * from fruits WHERE fruit_id=?',[id])
    return data
}

const updateDB = async(fruit_name,weight,amount,id)=>{
    let [data] = await pool.query('UPDATE fruits SET fruit_name =?,weight=?,amount=? WHERE fruit_id=?',[fruit_name,weight,amount,id])
    return data
    
}

const deleteDB = async(id)=>{
    await pool.query('DELETE from fruits WHERE fruit_id=?',[id])
}

const addToCartDB =async (user_id,fruit_id)=>{
    await pool.query('INSERT INTO cart (user_id,fruit_id) VALUES (?,?)',[user_id,fruit_id])
}
export {insertDab,getDat,fetchDB,updateDB,deleteDB,addToCartDB}