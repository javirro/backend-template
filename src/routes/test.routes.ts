import { Router } from 'express'
import { testController } from '../controllers/test.controller'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

router.post('/projects', authMiddleware, testController)
