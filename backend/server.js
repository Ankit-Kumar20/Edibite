const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database');
const authroutes = require('./Auth/authentication');
const userorderlistroutes = require('./API/user_order_list_api');
const resturant_userorderlistroutes = require('./API/resturant_order_list_api');

require('dotenv').config();

const app = express();

//connection to DB
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/authentication', authroutes);
app.use('/api', userorderlistroutes);
app.use('/api', resturant_userorderlistroutes);

app.get('/', function(req, res){
    res.send('hello');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listenting at port ${PORT}`);
})

