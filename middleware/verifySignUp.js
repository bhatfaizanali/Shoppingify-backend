const db = require("../models");
const Users = db.users;

checkDuplicateEmail = (req, res, next) => {
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!",
      });
      return;
    }

    next();
  });
};

const verifySignUp = { checkDuplicateEmail };

module.exports = verifySignUp;
