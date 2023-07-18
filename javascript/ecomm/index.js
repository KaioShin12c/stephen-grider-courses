const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const adminProductsRouter = require("./routes/admin/products");
const authRouter = require("./routes/admin/auth");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");
const { requireAuth } = require("./routes/admin/middlewares");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["keys"] }));

app.use(authRouter);
app.use(productsRouter);
app.use(cartsRouter);
app.use("/admin", requireAuth, adminProductsRouter);

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
