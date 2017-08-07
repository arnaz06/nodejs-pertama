var mongoose = require('mongoose')
var Schema = mongoose.Schema

var filmSchema = new Schema({
      title:{
          type: String,
          required: true
      },
      year: Number,
      released: Boolean,
},{
      timestamps: true

})

module.exports = mongoose.model('Film', filmSchema)
