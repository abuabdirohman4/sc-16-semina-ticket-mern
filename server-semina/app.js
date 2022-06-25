const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// router
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const v1 = '/api/v1/cms';

// (1) import categories router
const categoriesRouter = require('./app/api/v1/categories/router');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to api semina',
    })
});
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// (2) gunakan categories router
app.use(v1, categoriesRouter);

module.exports = app;