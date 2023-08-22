const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: 
    },
    price: {
        type: Schema.Types.ObjectId
        ref: 'Flight'
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)