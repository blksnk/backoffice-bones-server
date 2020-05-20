const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const clientSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
})

module.exports = clientSchema