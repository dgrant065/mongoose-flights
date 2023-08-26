const flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket, create
}

async function newTicket(req, res) {
    const tickets = await Ticket.find()
    res.render('tickets/new', { title: 'Add Ticket', tickets})
}

async function create(req, res) {
    try {
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`)
}