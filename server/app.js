const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/api');
const cors=require('cors')

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    limit: "500mb",
    extended: false
}));

const options = cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    preflightContinue: false
};

app.use('/',cors());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});
const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log("error:" + err);
})

app.use('/', router);

app.listen(4300, () => {
    console.log('listen at port 4300');
})