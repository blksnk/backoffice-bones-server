const capitalize = s => {
  const c = s.charAt(0).toUpperCase() + s.slice(1)
  console.log(c)
  return c
}

module.exports = {
  capitalize
}