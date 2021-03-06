const jwt = require('jsonwebtoken');

const SEED = require('../config/config').SEED;

//------------------------//
//     Verifica Token     //
//------------------------//
exports.verificaToken = function(req, res, next) {
  let token = req.query.token;

  jwt.verify(token,process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        mensaje: "Token incorrecto",
        errors: err
      });
    }

    req.usuario = decoded.usuario;
    next();
  });
};




