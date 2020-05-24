const castArray = ((mbArray) => {
  console.log('mbArray: ', mbArray)
  console.log('Array.isArray(mbArray): ', Array.isArray(mbArray))
  return (Array.isArray(mbArray)) ? mbArray : []
})

module.exports = {
  castArray,
}
