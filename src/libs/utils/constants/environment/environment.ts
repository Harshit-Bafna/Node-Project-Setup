import dotenvFlow from 'dotenv-flow'
dotenvFlow.config()

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    SERVER_URL: process.env.SERVER_URL
}
