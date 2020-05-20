const { Schema, model } = require('mongoose')
const { ObjectId } = Schema

const projectShema = new Schema({
  title: String,
  date: Date,
  description: String,
  client: { type: ObjectId, ref: 'Client' },
  thumbnail: { type: ObjectId, ref: 'Picture' },
  pictures: [{ 
    type: ObjectId,
    ref: 'Picture'
  }]
})

module.exports = projectShema