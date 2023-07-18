const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
var cors = require("cors");
require("dotenv").config();

require("./models/User");
require("./services/passport");

const connectMongoDB = require("./config/mongodb");
const authRouter = require("./routes/authRoutes");

const PORT = process.env.PORT || 5000;
const app = express();
connectMongoDB();

app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
