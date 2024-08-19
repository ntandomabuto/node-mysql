import {pool} from '../config/config.js'

const getData = async ()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const fetchDb = async  (username)=>{
    let [[data]] = await pool.query('SELECT * from users WHERE username=?',[username])
    return data
}

const insertDb = async (name,surname,age,fav_coding_lang,fav_car,eye_color,username,password)=>{
    let [data] = await pool.query('INSERT INTO users (name,surname,age,fav_coding_lang,fav_car,eye_color,username,password) VALUES (?,?,?,?,?,?,?,?)',[name,surname,age,fav_coding_lang,fav_car,eye_color,username,password])
    return data
}

const deleteDb = async(id)=>{
    await pool.query('DELETE from users WHERE user_id=?',[id])
}

const updateDb = async(name,surname,age,fav_coding_lang,fav_car,eye_color, id)=>{
    let [data] = await pool.query('UPDATE users SET name =?,surname=?,age=?,fav_coding_lang=?, fav_car=?, eye_color=? WHERE user_id=?',[name,surname,age,fav_coding_lang,fav_car,eye_color,id])
    return data
    
}



export {getData,fetchDb,insertDb,deleteDb,updateDb}