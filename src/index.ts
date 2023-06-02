import app from 'src/app'
import { PORT } from 'src/config/config'
;(async () => {
    try {
        //Express Server
        app.listen(PORT, async () => {
            console.log(`App listening at http://localhost:${PORT}`)
        })
    } catch (error: any) {
        console.log(`[ERROR] [INIT] `, error.message)
    }
})()

process.on('SIGINT', async () => {
    await app.locals.elasticsearchClient.close()
    await app.locals.datasourceclient.destroy()
    process.exit()
})
