const mongoose = require('mongoose');



const connectDb = async () => {
    await mongoose.connect( process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
    }).then(() => {
        console.log('MongoDB connected...');
    });
}
module.exports = connectDb;