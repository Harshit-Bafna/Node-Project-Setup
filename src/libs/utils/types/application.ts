import { ValidationError } from './dtoValidations'

export type THttpResponse = {
    success: boolean
    statusCode: number
    request: {
        method: string
        url: string
    }
    message: string
    data: unknown
}

export type THttpError = {
    success: boolean
    statusCode: number
    request: {
        method: string
        url: string
    }
    message: string
    data: unknown
    trace?: object | null
}

export type ApiResponse = {
    success: boolean
    statusCode: number
    message: string
    error?: Error
    data?: {
        docs: unknown
        total?: number
        page?: number
        limit?: number
    }
}

export type TDtoError = {
    success: boolean
    statusCode: number
    request: {
        method: string
        url: string
    }
    message: ValidationError[]
    data: unknown
    trace: null
}
