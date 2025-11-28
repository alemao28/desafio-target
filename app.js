var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var commissionRouter = require("./routes/commission");
var inventoryRouter = require("./routes/inventory");
var interestRouter = require("./routes/interest");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/commission", commissionRouter);
app.use("/api/inventory", inventoryRouter);
app.use("/api/inventory/products", inventoryRouter);
app.use("/api/interest", interestRouter);



// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rotas amigáveis
app.get("/commission", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "commission.html"));
});

app.get("/inventory", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "inventory.html"));
});

app.get("/interest", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "interest.html"));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
