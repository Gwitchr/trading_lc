import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import csurf from 'csurf';
import compression from 'compression';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mongooseConnection } from './config/connection';
import routes from './routes/';
import * as crons from './crons/';
dotenv.config();

const app = express();
const csrfProtection = csurf({cookie: true});
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

/**
 * Function to enable cors, logger, disable x-powered-by, urlencoded
 */
let whiteList = []

if(process.env.NODE_ENV==='development'){
  // whiteList = ['http://quoter.workosfera.com', 'http://localhost:3000',undefined]
  // whiteList = ['http://quoter.workosfera.com']
  mongooseConnection(process.env.MONGODB_DEV);
  app.use(logger('dev'));
} else {
  // whiteList = ['http://quoter.workosfera.com','http://workosfera.com','http://www.quoter.workosfera.com']
  mongooseConnection(process.env.MONGODB_URI);
}


const corsOptions = {
  origin(origin, callback) {
    console.log(origin)
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(compression());
app.use(helmet());
// app.use(cors(corsOptions));
app.use(cors());
// app.use(csrfProtection());
app.set('trust proxy', 1);
// app.use(session({
//     secret: 's3cur3',
//     name: 'sessionId'
// }))
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/api', routes);

crons.getMain()

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, '../app/build')));
//
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../app/build', 'index.html'));
//   });
// }
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.locals.error = err;

    // render the error page
    console.warn(err)
    res.status(err.status || 500).json({error:err})

    // res.render('error');
});

module.exports = app;
