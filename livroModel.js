const mongoose = require('mongoose')
const { stringify } = require('querystring')

const LivroSchema = new mongoose.Schema({
    nome : {
        type: String,
        required : true 
    },
    imagem : {
        type: String,
        required : true
    },
    sinopse: {
    type : String,
    required : true
    },
    rating: {
    type: String, 
    required : true 
    },

})

module.exports = mongoose.model('book',LivroSchema)