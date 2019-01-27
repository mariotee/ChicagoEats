const model = require('./Place.model.js')

class PlaceController
{
  async getAllPlaces() {
    return await model.find({})
  }
}

module.exports = PlaceController