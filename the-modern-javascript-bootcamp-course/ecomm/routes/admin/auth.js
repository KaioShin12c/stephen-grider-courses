const express = require("express");

const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");

const { handleErrors } = require("./middlewares");

const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExist,
  requireValidPasswordForUser,
} = require("./validators");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send(signupTemplate({}));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;

    res.redirect("/admin/products");
  }
);

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are log out!");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  "/signin",
  [requireEmailExist, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const user = await usersRepo.getOneBy({ email: req.body.email });
    req.session.userId = user.id;
    res.redirect("/admin/products");
  }
);

module.exports = router;
