import { Request, Response } from 'express'
import { THttpResponse } from '../types'
import { logger } from '../../service/winston'

export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, data: unknown): void => {
    const response: THttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            method: req.method,
            url: req.originalUrl
        },
        message: responseMessage,
        data: data
    }

    logger.info(`CONTROLLER_RESPONSE`, { meta: response })

    res.status(responseStatusCode).json(response)
}
