const Flight = require('../models/flight')

module.exports = {
    create
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id).sort({arrival: 'asc'})
    flight.destinations.push(req.body)
    flight.destinations.sort(function(a,b){
        return a.arrival - b.arrival
    })
    try {
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}