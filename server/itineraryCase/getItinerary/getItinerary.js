const { request, response } = require('../itineraryModule');
const itineraryRepository = require('../../repositories/itineraryRepositories');
const cityRepository = require('../../repositories/cityRepositories');

const getItineraries = async (req =request, res= response) => {

    try {
        const itinerariesDb = await itineraryRepository.getAll()
        const count = await itineraryRepository.count()

        if (!itinerariesDb) {
            return res.status(401).json({
                ok: false,
                message: '',
            })
        }

        res.status(200).json({
            ok: true,
            message: 'Itinerarios',
            itineraries: itinerariesDb,
            total: count
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error Interno del Servidor',
            err: error
        })
    }


}

const getItinerary = async (req=request, res=response) => {

    const id = req.params.id

    try {

        const itineraryDb = await itineraryRepository.getOne(id)

        if (!itineraryDb) {
            return res.status(400).json({
                ok: false,
                message: '',
                err
            })
        }

        return res.status(200).json({
            ok: true,
            message: 'Itinerario',
            itinerary: itineraryDb,
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error Interno del Servidor',
            error
        })
    }
}

const getItineraryByCityName = async (req=request, res=response) => {

    const name  = req.params.name
    
    
  try {
    const city = await cityRepository.getCityByName(name)
    console.log(city)
      const itineraryDb  = await itineraryRepository.getItinerariesByCity(city.id)
console.log(itineraryDb)
      if(!itineraryDb){
        return  res.status(400).json({
          ok:false,
          message:  '',
          err
        })
      }
  
     return res.status(200).json({
        ok: true,
        message:  'Itinerario por ciudad',
        city: itineraryDb,
      })  

    } catch (error) {
      res.status(500).json({
        ok:false,
        message:  'Error Interno del Servidor',
        error
      })
    }
}

module.exports = {
    getItineraries,
    getItinerary,
    getItineraryByCityName
}