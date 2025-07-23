export class ApiError extends Error {
    public status: number
    public success: boolean
    public data?: unknown

    constructor(message: string, status = 500, data?: unknown) {
        super(message)
        this.status = status
        this.success = false
        this.data = data
        Error.captureStackTrace(this, this.constructor)
    }
}
