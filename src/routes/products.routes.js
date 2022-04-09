import { Router } from "express";

const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {authJwt} from '../middlewares'

router.get('/', productsCtrl.getProducts)
router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.createProduct)
router.put('/:productId', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.updateProductById)
router.delete('/:productId',  [authJwt.verifyToken, authJwt.isModerator], productsCtrl.deleteProductById)
router.get('/:productId', productsCtrl.getProductById)

export default router