let User = require('../models/User')

let UserController = {
    //Listar
   /* show(req, res) {
        User.find({})
            .then(docs => {
                res.json(docs)
            }).catch(err => {
                res.json(err)
            })
    },*/
    //Bucar
    find(req, res){
        User.findById({
            _id: req.params.id
        })
        .then(doc =>{
            re.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    //Crear usuarios
    store(req, res) {
        User.create({
            name: req.body.name,
            mail: req.body.mail,
            password: req.body.password
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },
    //Actualizar
    /* update(req, res){
        User.update({
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
        User.findByIdAndRemove({
            _id: req.params.id
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }*/
} 

module.exports = UserController;