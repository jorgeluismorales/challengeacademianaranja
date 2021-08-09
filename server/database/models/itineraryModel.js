const { Schema, model } = require('mongoose');

const ItinerarySchema = new Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    activities: [{
        name: String,
        img: String,
    }],
    authorName: { type: String, required: true },
    authorPic: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true, min: 1, max: 5 },
    likes: { type: Number, default: 0 },
    hashtags: [String],
    comments: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        text: String,
        userName: String,
        userPic: String
    }],
    usersLike: [String],
    cityId: { type: Schema.Types.ObjectId, ref: 'City', required: true },
});

ItinerarySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})

module.exports = model('Itinerary', ItinerarySchema);