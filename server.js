const express = require('express');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const connectDb = require('./config/db_config');
const pageRoutes = require("./routes/pageRoutes/pageRoutes")
const blogRoutes = require('./routes/blogRoutes/blogRoutes');
dotenv.config();

const app = express();


// MiddleWawre
app.use(express.json());
app.use(express.static('public'));

app.use(methodOverride('_method', {methods: ['POST', 'GET']}));


app.use(express.urlencoded({extended: true}));

// Template Engine
app.set('view engine', 'ejs');


app.use("/", pageRoutes);
app.use("/post", blogRoutes);


app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`Example app listening on port ${process.env.PORT} !`);
});