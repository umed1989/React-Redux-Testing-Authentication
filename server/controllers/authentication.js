const User = require("../models/user");
exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.status(422).send({ error: "Email is in use" });
    }

    const newUser = new User({
      password: password,
      email: email
    });

    newUser.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ success: true });
    });
  });
};
