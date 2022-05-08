const mongoose = require('mongoose');

const connectDb = async () => {
    let conn
    try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });
    }
    catch (e) {
        console.log('promise reject error', e);
    }
    console.log(`Mongo connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDb;