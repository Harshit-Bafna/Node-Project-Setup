import { environment } from '../../utils/constants'
import mongoose from 'mongoose'

export default {
    connect: async () => {
        try {
            await mongoose.connect(environment.MONGODB_URL as string)
            return mongoose.connection
        } catch (error) {
            throw error
        }
    }
}
