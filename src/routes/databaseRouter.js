const express = require("express")
const { models, getModel, getModelNames, getModelDetails } = require("../database/models.js")
const { createNewItem } = require("../database/items.js")
const { capitalize } = require("../helpers/string.js")
const { error, log } = require("../helpers/log.js")

const router = express.Router()

router.get('/data/:name/get', async (req, res, next) => {
  const { name } = req.params
  try {
    const items = await getModel(name).find()
    res.json(items)

  } catch (e) {
    error(`databaseRouter: Unable to find model '${name}'`)
    res.send({
      statusCode: 500
    })
  }
})

router.post('/data/:name/add', (req, res, next) => {
  const { name } = req.params
  // console.log(req.body)
  try {
    const newItem = createNewItem(name, req.body)
    const error = newItem.validateSync()
    newItem.save()
    res.json({
      statusCode: 200,
      msg: `new ${capitalize(name)} saved`
    })

  } catch (e) {
    log(e)
    res.json({
      statusCode: 403,
      error: e
    })
  }
})

router.get('/model/get', (req, res) => {
  res.json(getModelNames())
})

router.get('/model/get/:name', (req, res) => {
  const { name } = req.params
  res.json(getModelDetails(name))
})

router.post('/model/add', async (req, res) => {
  const { model } = req.body

})

module.exports = router