const { Router  } = require('../cityCase/cityModule')
const router = new  Router()
const passport = require('../passport');
const { create, get  } = require('../cityCase/cityController')

/* obtener todas las ciudades */
router.get('/', passport.authenticate('jwt', { session: false }),  get.getCities)
router.get('/city/:id', passport.authenticate('jwt', { session: false }), get.getCity) 
router.get('/city', passport.authenticate('jwt', { session: false }), get.getCityByQuery)
/* crear una nueva city */
router.post('/', passport.authenticate('jwt', { session: false }), create.create);
  
module.exports = router