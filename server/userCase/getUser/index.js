const { request, response } = require('../userModule')
const userRepository = require('../../repositories/userRepositories')


const getUsers = async (req = request, res = response) => {

    try {
        const usersDb = await userRepository.getAll();

        if (usersDb === 0) {
            return res.status(401).json({
                ok: false,
                msg: 'No hay usuarios almacenados en la base de datos'
            });
        }

        res.status(200).json({
            ok: true,
            msg: 'Usuarios',
            users: usersDb
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error',
            error
        });

    }
}

const getUser = async (req = request, res = response) => {
    try {
        const userId = req.params.id;
        const userDb = await userRepository.getOne(userId);

        if (!userDb) {
            return res.status(401).json({
                ok: false,
                msg: `El usuario, de id: ${req.params.id} no existe`
            });
        }

        res.status(200).json({
            ok: true,
            msg: 'Usuario',
            user: userDb
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error',
            error
        });
    }
}


const getUserByQuery = async (req, res) => {
    try {
        const name = req.query.firstName;
        const userDb = await userRepository.getUserByName(name);

        if (!userDb) {
            return res.status(401).json({
                ok: false,
                msg: `El usuario ${name} no existe en la base de datos`
            });
        }

        res.status(200).json({
            ok: true,
            msg: 'Usuario',
            user: userDb
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error',
            error
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    getUserByQuery
}