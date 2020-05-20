const { connect } = require('mongoose')
require("./models.js")
const { error, log } = require("../helpers/log.js")

const createClient = async (url) => {
  try {
    const client = await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch(e) {
    error(`createClient: unable to connect, ${e}`)
  }
}

module.exports = {
  createClient
}