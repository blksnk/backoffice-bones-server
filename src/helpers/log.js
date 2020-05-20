const log = (msg) => console.log(msg)
const error = (msg) => console.error(new Error(msg))

module.exports = {
  log,
  error
}