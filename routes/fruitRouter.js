import express from 'express'
import {insertFru,fetchData,fetchFruit,updateDat,deleteDat,addToCart} from '../controller/fruitController.js'

const router = express.Router()
import {verifyAToken} from '../middleware/authenticate.js'

router.post('/cart',verifyAToken,addToCart)
router.get('/',fetchData)
router.post('/insert',insertFru)

router
    .route('/:id')
        .get(fetchFruit)
        .patch(updateDat)
        .delete(deleteDat)

export default router