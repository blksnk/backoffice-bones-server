const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const pictureSchema = new Schema({
  title: { default: "" },
  date: { type: Date, default: Date.now},
  url: { type: String, required: true }
})

module.exports = pictureSchema