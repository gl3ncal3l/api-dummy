import { PORT } from 'src/config/config'

const options = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'API TEST',
            version: '0.1.0',
            description: 'Webservice for testing'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]
    },
    apis: ['**/routes/*.ts']
}

export default options
