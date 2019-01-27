const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,         
  },
  address: {
    type: String,
    required: true,    
  },
  latitude: {
    type: Number,
    required: true,    
  },
  longitude: {
    type: Number,
    required: true,     
  },
  breakfast: {
    type: Boolean,
    required: true,    
  },
  lunch: {
    type: Boolean,
    required: true,         
  },
  dinner: {
    type: Boolean,
    required: true,         
  },
  dessert: {
    type: Boolean,
    required: true,         
  }
});
 
module.exports = mongoose.model('Place', schema, 'Places');