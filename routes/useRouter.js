import express from 'express'
import {fetchDatas,fetchUser,insertData,deleteData,updateData,loginUser} from '../controller/userController.js'
import {checkUser} from '../middleware/authenticate.js'

const router = express.Router()

router.post('/login',checkUser,loginUser)
router.get('/',fetchDatas)
router.post('/insert',insertData)


router
    .route('/:id')
        .get(fetchUser)
        .delete(deleteData)
        .patch(updateData)



export default router