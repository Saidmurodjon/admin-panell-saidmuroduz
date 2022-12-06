const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title : {type: String, required:true},    
    description: {type: String, required:true},
    path : {type: String, required:false},    
    gitPath: {type: String, required:false},
    images : {type: [JSON], required:false},    
    video: {type: String, required:false},
})
module.exports = mongoose.model('Project', ProjectSchema)