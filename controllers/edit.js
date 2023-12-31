const TicketList = require('../models/ticket-list')

module.exports = {
    deleteTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        });
    },
    updateTicket: (req, res) => {
        const id = req.params.id;
        TicketList.findByIdAndUpdate(
            id,
            {
                status: 'Closed',
            },
            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}