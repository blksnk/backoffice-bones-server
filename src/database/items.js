const { getModel } = require('./models.js')

const createNewItem = (name, props) => {
  const model = getModel(name)
  return new model({ ...props })
}

module.exports = {
  createNewItem
}