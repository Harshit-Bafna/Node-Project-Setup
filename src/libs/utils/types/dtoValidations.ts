export interface ValidationError {
    key: string
    message: string
}

export interface ValidationResult {
    success: boolean
    status: number
    errors: ValidationError[]
}
