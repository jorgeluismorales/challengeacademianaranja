const { request, response } = require('../authModule');
const userRepository = require('../../repositories/userRepositories')
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogIn = async (req = request, res = response) => {
    console.log(req.body)

    const errores = await validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    };

    try {
        const { mail, password } = req.body;

        let user = await userRepository.getUserByEmail(req.body.mail);
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const correctPass = bcrypt.compare(password, user.password);
        if (!correctPass) {
            return res.status(401).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        const payload = {
            user: {
                id: user.id,
                username: `${user.firstName} ${user.lastName}`,
                avatarPicture: user.userPic
            }
        }

        jwt.sign(payload, process.env.secretOrKey, {
            expiresIn: 2592000
        }, (error, token) => {
            if (error) {
                res.json({
                    success: false,
                    toke: 'There was an error'
                });
            }

            res.status(200).json({
                success: true,
                token
            });
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    userLogIn
}