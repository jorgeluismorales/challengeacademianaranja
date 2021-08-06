const { Schema, model } = require('mongoose');

const CitySchema = new Schema({

    name: { type: String, required: true },
    country: { type: String, required: true },
    img: { type: String, required: true },

});

CitySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})

module.exports = model('City', CitySchema);