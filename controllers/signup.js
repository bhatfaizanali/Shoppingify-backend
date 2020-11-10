const Joi = require("joi");
const bcrypt = require("bcrypt");

const db = require("../models");
const Op = db.Sequelize.Op;
const Users = db.users;

const schema = Joi.object({
  first_name: Joi.string().alphanum().min(1).max(50).required(),
  last_name: Joi.string().alphanum().min(1).max(50).required(),
  email: Joi.string().alphanum().min(1).max(50).required(),
  password: Joi.string().alphanum().min(1).max(50).required(),
});
exports.createUser = async (request, response) => {
  if (!schema.validate(request.body).error) {
    try {
      const hashedPassword = await bcrypt.hash(request.body.password, 10);
      const creaedUser = await Users.create({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: hashedPassword,
      });
      response.status(201).send("User created!").end();
    } catch {
      response.status(500).send("Server error!").end();
    }
  } else {
    console.log(schema.validate(request.body).error);
    response.status(300).send(schema.validate(request.body)).end();
  }
};
