import router from './routes/index';
import db from './mongodb/db.js';
import history from 'connect-history-api-fallback';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import config from './config/default';
// import connectMongo from 'connect-mongo';
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();



app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1')
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore({
        url: config.url
    })
}))



router(app);

app.use(history());


app.listen(config.port);