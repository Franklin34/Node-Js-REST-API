import { Router } from "express";

const router = Router()

import * as authCtrl from '../controllers/auth.controller'

router.post('/signUp', authCtrl.signUp)
router.post('/signIn', authCtrl.signIn)
    
export default router