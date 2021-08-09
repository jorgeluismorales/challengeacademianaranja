const { City, request, response } = require('../cityModule')
const cityRepository = require('../../repositories/cityRepositories')

const create = async (req = request, res = response) => {
  let body = req.body



  const newCity = new City(body);

  try {
    const findCity = await cityRepository.getCityByName(body.name);
    if (findCity.length > 0) {
      return res.status(400).json({
        ok: false,
        message: 'La ciudad ya existe en la Base de datos'
      });
    } else {
      const city = await cityRepository.createCity(newCity);
      return res.status(201).json({
        ok: true,
        message: 'La Ciudad se creo correctamente',
        city
      })
    }


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
}
