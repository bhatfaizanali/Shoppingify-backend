const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const db = require("../models");
const Op = db.Sequelize.Op;
const Users = db.users;

let refreshTokens = [];

const schema = Joi.object({
  email: Joi.any(),
  password: Joi.string().alphanum().min(1).max(50).required(),
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

exports.signIn = async (request, response) => {
  if (!schema.validate(request.body).error) {
    var condition = request.body.email
      ? { email: { [Op.eq]: `${request.body.email}` } }
      : null;
    Users.findAll({ where: condition })
      .then(async (data) => {
        if (data.length) {
          try {
            if (await bcrypt.compare(request.body.password, data[0].password)) {
              const email = request.body.email;
              const user = { email };
              const accessToken = generateAccessToken(user);

              const refreshToken = jwt.sign(
                user,
                process.env.REFRESH_TOKEN_SECRET,
              );
              refreshTokens.push(refreshToken);
              response.json({
                accessToken: accessToken,
                refreshToken: refreshToken,
              });
            } else {
              response.send("Not Allowed");
            }
          } catch {
            response.status(500).send();
          }
        } else {
          response.status(400).send("Cannot find user").end();
        }
      })
      .catch((err) => {
        response.status(500).send({
          message: err.message || "Some error occurred.",
        });
      });
  } else {
    console.log(schema.validate(request.body).error);
    response.status(300).send(schema.validate(request.body)).end();
  }
};
