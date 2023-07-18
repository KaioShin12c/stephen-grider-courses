const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/surveys");
  }
);

router.get("/api/current_user", (req, res) => {
  res.json(req.user);
});

router.get("/api/logout", (req, res) => {
  console.log("logout");
  req.logout();
  res.redirect("/");
});

router.get("/", (req, res) => {
  res.send("success");
});

module.exports = router;
