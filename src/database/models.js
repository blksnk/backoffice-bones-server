const mongoose = require('mongoose')

const Client = require('./schemas/ClientSchema.js')
const Project = require('./schemas/ProjectSchema.js')
const Picture = require('./schemas/PictureSchema.js')

const { capitalize } = require("../helpers/string.js")

const schemas = { Client, Project, Picture }
const keys = Object.keys(schemas)

const createModel = (name, schema) => mongoose.model(name, schema)

let modelsArray = keys.map((key, index) => {
  return createModel(key, schemas[key])
})

const models = Object.fromEntries(modelsArray.map((model, index) => [keys[index], model]))

const getModelNames = () => {
  return mongoose.modelNames()
}

const getModel = name => models[capitalize(name)]

const getModelDetails = (name) => getModel(name).schema.paths

const createNewModel = (name, props) => {
  const newSchema = new mongoose.Schema({ ...props })
  const newModel = createModel(name, newSchema)
  return newModel
}

module.exports = {
  schemas,
  models,
  createModel,
  getModelNames,
  getModel,
  getModelDetails,
  createNewModel
}