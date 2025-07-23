import { NextFunction, Request } from 'express'
import { ValidationError, TDtoError } from '../types'
import { logger } from '../../service/winston'

export default (nextFunc: NextFunction, req: Request, errorStatusCode = 400, errMessage: ValidationError[], data?: unknown): void => {
    const errorObj: TDtoError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            method: req.method,
            url: req.originalUrl
        },
        message: errMessage,
        data: {
            docs: data || null
        },
        trace: null
    }

    logger.error(`CONTROLLER_ERROR`, {
        meta: errorObj
    })

    return nextFunc(errorObj)
}
