import { Router, Response, Request, NextFunction } from 'express'
import { HttpError, HttpResponse } from '../libs/utils/helper'

const router = Router()

/*
    Route: /api/v1/
    Method: GET
    Desc: Hello API
    Access: Protected
*/
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = { docs: null }
        HttpResponse(req, res, 200, 'Welcome to the server! 🚀 Your backend is up and running.', data)
    } catch (error) {
        HttpError(next, error as Error, req, 500)
    }
})

export default router
