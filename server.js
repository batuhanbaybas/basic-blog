const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db_config');


dotenv.config();

const app = express();


// MiddleWawre
app.use(express.json());
app.use(express.static('public'));

// Template Engine
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    res.render('index');
});



app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`Example app listening on port ${process.env.PORT} !`);
});