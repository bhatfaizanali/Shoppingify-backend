const Joi = require("joi");
const bcrypt = require("bcrypt");

const db = require("../models");
const Op = db.Sequelize.Op;
const Users = db.users;

const schema = Joi.object({
  email: Joi.any(),
  password: Joi.string().alphanum().min(1).max(50).required(),
});

exports.signIn = async (request, response) => {
  if (!schema.validate(request.body).error) {
    var condition = request.body.email
      ? { email: { [Op.eq]: `${request.body.email}` } }
      : null;
    Users.findAll({ where: condition })
      .then((data) => {
        if (data.length) {
          try {
            // if (await bcrypt.compare(req.body.password, user.password)) {
            //   res.send("Success");
            // } else {
            response.send("Not Allowed");
            // }
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
