let express = require('express');
let PlaceController = require('../controllers/PlaceController');

let router = express.Router();
//Listar todos los lugares
router.get('/places', PlaceController.show);
//Crear un lugar
router.post('/places', PlaceController.store);
//Actualizar un lugar
router.put('/places/:id', PlaceController.update);
//Buscar un lugar
router.get('/places/:id', PlaceController.find);
//Eliminar un lugar
router.delete('/places/:id', PlaceController.destroy);

module.exports = router;