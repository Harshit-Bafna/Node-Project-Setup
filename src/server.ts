/* eslint-disable no-console */
import app from './app'
import { environment } from './libs/utils/constants'

const server = app.listen(environment.PORT)

;(() => {
    try {
        console.info(`APPLICATION_STARTED`, {
            meta: {
                PORT: environment.PORT,
                SERVER_URL: environment.SERVER_URL
            }
        })
    } catch (error) {
        console.error(`APPLICATION_ERROR`, { meta: error })
        server.close((err) => {
            if (err) {
                console.error(`APPLICATION_ERROR`, { meta: err })
            }
            process.exit(1)
        })
    }
})()
