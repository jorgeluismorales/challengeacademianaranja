const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    userPic: { type: String, required: true },
    country: { type: String, required: true },

});

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})

module.exports = model('City', UserSchema);