import app from './app'
import * as dotenv from 'dotenv'
import { createServer } from 'http'
dotenv.config()

const server = createServer(app)

const PORT = process.env.PORT || 5000
server.listen(PORT)
console.log(`Server running on port ${PORT}`)
