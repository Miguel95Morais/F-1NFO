var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var circuitsRouter = require('./routes/circuitsRoutes');
var halloffamedriversRouter = require('./routes/halloffamedriversRoutes');
var halloffameteamsRouter = require('./routes/halloffameteamsRoutes');
var teamsRouter = require('./routes/teamsRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/circuits', circuitsRouter);
app.use('/api/halloffamedrivers', halloffamedriversRouter);
app.use('/api/halloffameteams', halloffameteamsRouter);
app.use('/api/teams', teamsRouter);

module.exports = app;
