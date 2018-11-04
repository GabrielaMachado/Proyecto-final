let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    }
}, {
        versionKey: false
    });

module.exports = moongoose.model('User', UserSchema);
