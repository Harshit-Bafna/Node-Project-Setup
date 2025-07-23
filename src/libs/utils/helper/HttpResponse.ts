import { Request, Response } from 'express'
import { THttpResponse } from '../types'

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

    // eslint-disable-next-line no-console
    console.info(`CONTROLLER_RESPONSE`, { meta: response })

    res.status(responseStatusCode).json(response)
}
