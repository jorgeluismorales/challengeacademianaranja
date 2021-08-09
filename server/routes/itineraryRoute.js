const { Router  } = require('../itineraryCase/itineraryModule')
const router = new  Router()
const { create, get  } = require('../itineraryCase/itineraryController')

/* obtener todas las ciudades */
router.get('/all',  get.getItineraries)
router.get('/:name', get.getItineraryByCityName)
/* crear una nueva city */
router.post('/', create.create);
  
module.exports = router