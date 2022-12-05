const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    title : {type: String, required:true},    
    description: {type: String, required:true},
    path : {type: String, required:true},    
    gitPath: {type: String, required:true},
    images : {type: [JSON], required:true},    
    video: {type: String, required:true},
})
module.exports = mongoose.model('Project', ProjectSchema)