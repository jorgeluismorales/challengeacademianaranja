const { Itinerary, request, response } = require('../itineraryModule');
const itineraryRepository = require('../../repositories/itineraryRepositories');

const create = async (req = request, res = response) => {
    let body = req.body
    console.log(body);


    const newItinerary = new Itinerary(body);

    try {
            const itinerary = await itineraryRepository.createItinerary(newItinerary);
            return res.status(201).json({
                ok: true,
                message: 'El itinerario se creo correctamente',
                itinerary
            })
        


    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: 'Error interno del servidor',
            error
        })
    }
}

module.exports = {
    create
};