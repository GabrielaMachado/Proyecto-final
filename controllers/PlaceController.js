let Place = require('../models/Place')

const places = [
    {
        name: 'Plaza de bolívar',
        description: 'lorem ipsom'
    },
    {
        name: 'Centro comercial unicentro'
    }
]

let PlaceController = {
    show(req, res) {
        Place.find({})
        .then(docs => {
        res.json(docs)
        }).catch(err => {
        res.json(err)
        })
        },
    store(req, res) {
        Place.create({
            name: req.body.name,
            description: req.body.description
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlaceController;