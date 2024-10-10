const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./database');
const authroutes = require('./Auth/authentication');

const app = express();

//connection to DB
connectDB();

//middleware
app.use(bodyParser.json());
app.use(cors());


app.use('/authentication', authroutes);
app.get('/', function(req, res){
    res.send('hello');
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('listening at port ', {PORT});
})

