import { Router } from 'express'
import applicationRouter from '../router/application'

const router = Router()

router.use('/', applicationRouter)

export default router
