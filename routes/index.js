let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController')

let router = express.Router();
//Listar todos los lugares
router.get('/places', PlaceController.show);
//Crear
router.post('/places', PlaceController.store);
router.post('/users', UserController.store);
//Actualizar un lugar
router.put('/places/:id', PlaceController.update);
//Buscar
router.get('/places/:id', PlaceController.find);
router.get('/users/:id', UserController.find);
//Eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);

module.exports = router;