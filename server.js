const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// const logger = require('./middleware/logger');  Custom loggin middleware

// Route files
const bootcamp = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Loggin middleware
if (process.env.NODE_ENV = 'development') app.use(morgan('dev'));

// Mount routes
app.use('/api/v1/bootcamp', bootcamp);

// Custom loggin Middleware
// app.use(logger);

// Can handle requests like this
// app.get('/', (req, res) => {
// res.send({ name: 'Parth' });
// res.sendStatus(400);
// res.status(200).send({ success: true, code: 1000 });
// });


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running pn ${PORT} in ${process.env.NODE_ENV}`.yellow.bold));

// Handle unhandled errors
// process.on('unhandledRejection', (err, promise) => {
//     console.log(`Error : ${err.message}`.red);
//     server.close(() => process.exit(1));
// })