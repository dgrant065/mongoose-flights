const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['SDQ', 'LYS', 'NRT', 'AUA', 'BEY']},
    arrival: Date
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['JetBlue', 'Delta', 'United', 'Southwest', 'Spirit']},
    airport: {type: String, enum: ['JFK', 'MCO', 'ALB', 'ORD']},
    flightNo: {type: Number, required: true, min: 10, max: 9999},
    departs: {type: Date, default: function() {
        const today = new Date()
        console.log(today.getFullYear())
        return today.setFullYear(today.getFullYear() + 1)}},
    destinations: [destinationSchema]
   },
   {timestamps: true}
)


module.exports = mongoose.model('Flight', flightSchema);