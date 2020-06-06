const dotenv = require("dotenv")
const path = require("path")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { createClient } = require("./database/client.js")

const databaseRouter = require("./routes/databaseRouter.js")

dotenv.config()
const { PORT, DATABASE_URL } = process.env

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

createClient(DATABASE_URL)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/database', databaseRouter)


app.listen(PORT, () => {
  console.log('server started on local port', PORT)
})
