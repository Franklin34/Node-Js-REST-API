import { Router } from "express";

const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignUp} from '../middlewares'

router.post('/signUp', [verifySignUp.checkDuplicateUsername, verifySignUp.checkRolesExisted], authCtrl.signUp)
router.post('/signIn', authCtrl.signIn)
    
export default router