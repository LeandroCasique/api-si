const jwt = require("jsonwebtoken");

exports.jwt = async (req, res, next) => {
  const token = req.header("token");

  if (!token) return res.status(401).send({ message: "Acceso denegado!" });
  try {
    const verified = jwt.verify(token, 'secret');

    req.user = verified;
    return next();
  } catch (err) {
    return res.status(401).send({ message: "Token invalido" });
  }
};
