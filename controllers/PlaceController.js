let Place = require('../models/Place')

/*const places = [
    {
        name: 'Plaza de bolívar',
        description: 'lorem ipsom'
    },
    {
        name: 'Centro comercial unicentro'
    }
] */

let PlaceController = {
    //Listar
    show(req, res) {
        Place.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    },
    //Bucar
    find(req, res){
        Place.findById({
            _id: req.params.id
        })
        .then(doc =>{
            re.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    //Crear Lugares
    store(req, res) {
        Place.create({
            name: req.body.name,
            description: req.body.description
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //Actualizar
    update(req, res){
        Place.update({
            _id: req.params.id
        },{
          name: req.body.name,
          description: req.body.description,
          location: req.body.location
        }).then(doc =>{
            res.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    //Eliminar
    destroy(req, res){
        Place.findByIdAndRemove({
            _id: req.params.id
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlaceController;