const { User, response } = require("../userModule");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const userRepository = require("../../repositories/userRepositories");

const create = async (req, res = response) => {
  let body = req.body;

  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    let newUser = await userRepository.getUserByEmail(body.mail);

    if (newUser) {
      return res.status(400).json({
        ok: false,
        msg: `El usuario con mail ${body.mail} ya esta registrado`,
      });
    }

    newUser = new User(body);

    newUser.password = await bcrypt.hash(body.password, 10);

    await userRepository.createUser(newUser);

    res.status(201).json({
      ok: true,
      msg: "Usuario Registrado Correctamente",
      user: newUser,
    });
  } catch (error) {
    console.log(error),
      res.status(500).json({
        ok: false,
        msg: "Error interno del servidor",
        error,
      });
  }
};

module.exports = {
  create,
};
