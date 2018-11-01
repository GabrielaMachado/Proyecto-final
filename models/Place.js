let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let PlaceSchema = Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    }
}, {
        versionKey: false
    });

module.exports = moongoose.model('Place', PlaceSchema);
