import { NextFunction, Request } from 'express'
import { THttpError } from '../types'
import { responseMessage } from '../constants'
import { logger } from '../../service/winston'

export default (
    nextFunc: NextFunction,
    err: Error | null = null,
    req: Request,
    errorStatusCode = 500,
    errMessage = responseMessage.SOMETHING_WENT_WRONG,
    data?: unknown
): void => {
    const errorObj: THttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            method: req.method,
            url: req.originalUrl
        },
        message: err instanceof Error ? err.message : errMessage,
        data: { docs: data || null },
        trace: err instanceof Error ? { error: err.stack } : null
    }

    logger.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    })

    return nextFunc(errorObj)
}
