let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: String
});

module.exports = moongoose.model('Place', PlaceSchema);
