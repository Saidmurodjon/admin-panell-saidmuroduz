const mongoose = require('mongoose')
const uri = 'mongodb+srv://saidmurod:10202001@cluster0.m79kn.mongodb.net/saidmuroduz'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
const conexion = mongoose.connection

module.exports = conexion
