const { Router  } = require('../itineraryCase/itineraryModule')
const router = new  Router()
const passport = require('../passport');
const { create, get  } = require('../itineraryCase/itineraryController')

/* obtener todas las ciudades */
router.get('/', passport.authenticate('jwt', { session: false }),  get.getItineraries)
router.get('/:name', passport.authenticate('jwt', { session: false }), get.getItineraryByCityName)
/* crear una nueva city */
router.post('/', passport.authenticate('jwt', { session: false }), create.create);
  
module.exports = router