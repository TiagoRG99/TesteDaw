var mongoose = require('mongoose')

var batismoSchema = new mongoose.Schema({
    date: {type: String},
    title: {type: String},
    ref: {type: String},
    href: {type: String},
  });

module.exports = mongoose.model('batismo', batismoSchema)
