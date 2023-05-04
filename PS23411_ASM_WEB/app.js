// mail app password: dwcyffrnozbnxocg
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const mongoose = require("mongoose");
require("./components/category/Model");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/cpanel/User");
const productsRouter = require("./routes/cpanel/Product");
const userAPIRouter = require("./routes/api/User");
const productAPIRouter = require("./routes/api/Product");

// assignment game 2d advanced
const gameAPIRouter = require("./routes/api/Game");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    session({
        secret: "iloveyou",
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);
mongoose
    .connect("mongodb://127.0.0.1:27017/Assignment", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(">>>>>>>>>> DB Connected!!!!!!"))
    .catch((err) => console.log(">>>>>>>>> DB Error: ", err));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/api/user", userAPIRouter);
app.use("/api/products", productAPIRouter);
app.use("/api/game", gameAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
