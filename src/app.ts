import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

// Middlewares
import error from 'src/middlewares/error'

// Documentation
import swaggerOptions from 'src/documentation/config/swagger.dev'

import apiRouter from './routes/apiRoute'

const specs = swaggerJsDoc(swaggerOptions)

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use('', [apiRouter])

app.use(error)
export default app
