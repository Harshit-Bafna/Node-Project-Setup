import util from 'util'
import 'winston-mongodb'
import { environment } from '../../utils/constants'
import * as sourceMapSupport from 'source-map-support'
import { createLogger, format, transports } from 'winston'
import { MongoDBTransportInstance } from 'winston-mongodb'
import { EApplicationEnvironment } from '../../utils/enums'
import { red, blue, yellow, green, magenta } from 'colorette'
import { ConsoleTransportInstance } from 'winston/lib/winston/transports'

sourceMapSupport.install()

const colorizeLevel = (level: string) => {
    switch (level) {
        case 'ERROR':
            return red(level)
        case 'INFO':
            return blue(level)
        case 'WARN':
            return yellow(level)
        default:
            return level
    }
}

const ConsoleLogFormat = format.printf((info) => {
    const { level, message, timestamp, meta = {} } = info

    const customeLevel = colorizeLevel(level.toUpperCase())
    const customTimeStamp = green(timestamp as string)
    const customMessage = message as string

    const customeMeta = util.inspect(meta, {
        showHidden: false,
        depth: null,
        colors: true
    })

    const customeLog = `${customeLevel} [${customTimeStamp}] ${customMessage}\n${magenta('META')} ${customeMeta}\n`

    return customeLog
})

const consoleTransport = (): Array<ConsoleTransportInstance> => {
    if (environment.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return [
            new transports.Console({
                level: 'info',
                format: format.combine(format.timestamp(), ConsoleLogFormat)
            })
        ]
    }
    return []
}

const MongoDBTransport = (): Array<MongoDBTransportInstance> => {
    return [
        new transports.MongoDB({
            level: 'info',
            db: environment.MONGODB_URL as string,
            metaKey: 'meta',
            expireAfterSeconds: 3600 * 24 * 30,
            collection: 'application-logs'
        })
    ]
}

export default createLogger({
    defaultMeta: {
        meta: {}
    },
    transports: [...MongoDBTransport(), ...consoleTransport()]
})
