const { check } = require("express-validator");
const { Router } = require("../userCase/userModule");
const router = new Router();
const passport = require('../passport');
const { create, get } = require("../userCase/userController");

/* obtener todas las ciudades */
router.get("/", passport.authenticate('jwt', { session: false }), get.getUsers);
router.get("/user/:id", passport.authenticate('jwt', { session: false }), get.getUser);
router.get("/user", passport.authenticate('jwt', { session: false }), get.getUserByQuery);
/* crear una nueva city */
router.post(
  "/",
  [
    passport.authenticate('jwt', { session: false }),
    check("firstName", "Escribí un nombre valido").isString().not().isEmpty(),
    check("lastName", "Escribí un apellido valido").isString().not().isEmpty(),
    check("mail", "Escribí un email valido").isEmail(),
    check("password", "Escribí una contraseña valida").not().isEmpty(),
    check("userPic", "Agrega una imagen valida").isString().not().isEmpty(),
    check("country", "Escribí un país válido").isString().not().isEmpty(),
  ],
  create.create
);

module.exports = router;
