const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const User = require('../mongoose-models/user_model');
const hashPassword = require('./hashpassword');
const bcrypt = require('bcryptjs');
const Resturant = require('../mongoose-models/resturant_model');

const JWTpassword = 'secret';

const router = express.Router();

// async function exitinguser(email){
//     try{
//         const user_email = await User.findOne({email: email});
//         return true;
//     }
//     catch(err){
//         return false;
//     }
// }

async function existingresturant(email) {
    try{
        const resturant_email = await Resturant.findOne({email});
        return true;
    }
    catch(err){
        console.log(err.message);
        return false;
    }
}

//signup for users
router.post('/signup', async function(req, res){
    const {username, email, password} = req.body;
    const user_email = await User.findOne({ email: email });
    if(user_email){
        res.status(400).send('email already exists.');
    }
    else{
        const hashedPassword = await hashPassword(password);
        await User.create({username: username, email:email, password: hashedPassword});
        res.status(201).send('User has been created');
    }

})

//sigin for users
router.post('/signin', async function(req, res){
    const {username, email, password} = req.body;
    if(await exitinguser(email)){
        const match_password = await bcrypt.compare(password, User.password);
        if(!match_password){
            res.status(400).send('invalid credentials');
        }
        else{
            const user_token = jwt.sign({username, email, password}, JWTpassword);
            res.status(201).send({user_token});
        }
    }
    else{
        res.status(400).send('user has not signed_up');
    }
})

//siginup page for resturants
router.post('/resturant/signup', async function(req, res){
    const {username, email, password, address} = req.body;
    const resturant_email = await Resturant.findOne({ email: email})
    if(resturant_email){
        res.status(401).send("resturant has been registed before");
    }
    else{
        const hashedPassword = await hashPassword(password);
        await Resturant.create({username: username, email: email, password: hashedPassword});
        res.status(201).send("Your resturant has been created.");
    }
})

//signin page for resturants
router.post('/resturant/signin', async function(req, res){
    const{ username, email, password } = req.body;
    if(await existingresturant(email)){
        const match_password = await bcrypt.compare(password, Resturant.password);
        if(!match_password){
            res.status(400).send('Invalid credentials');
        }
        else{
            const resturant_token = jwt.sign({username: username, email:email, password: hashedPassword});
            res.status(201).send({resturant_token});
        }
    }
})

module.exports = router;