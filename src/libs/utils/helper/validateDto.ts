import { ClassConstructor, plainToInstance } from 'class-transformer'
import { validate, ValidationError as ClassValidatorError } from 'class-validator'
import { ValidationError, ValidationResult } from '../types'

const extractErrors = (errors: ClassValidatorError[], parentKey = ''): ValidationError[] => {
    const result: ValidationError[] = []

    for (const error of errors) {
        const key = parentKey ? `${parentKey}.${error.property}` : error.property

        if (error.constraints) {
            result.push({
                key,
                message: Object.values(error.constraints)[0]
            })
        }

        if (error.children && error.children.length > 0) {
            result.push(...extractErrors(error.children, key))
        }
    }

    return result
}

export const validateDTO = async (dto: ClassConstructor<object>, body: object): Promise<ValidationResult> => {
    const dtoInstance = plainToInstance(dto, body)
    const errors = await validate(dtoInstance, { whitelist: true, forbidNonWhitelisted: false })

    if (errors.length > 0) {
        const formattedErrors = extractErrors(errors)

        return {
            success: false,
            status: 400,
            errors: formattedErrors
        }
    }

    return {
        success: true,
        status: 200,
        errors: []
    }
}
