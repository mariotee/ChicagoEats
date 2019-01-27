const database = require('./network/database.js')
const PlaceController = require('./Place.controller.js')

module.exports.handler = async (event) => {
  const db = new database()
  const controller = new PlaceController()
  let data = await controller.getAllPlaces()
  return data
}