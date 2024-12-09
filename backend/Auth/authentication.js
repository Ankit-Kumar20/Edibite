const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require('zod');
const prisma = require('../prisma/prisma_client');
const User = require('../mongoose-models/user_model');
const hashPassword = require('./hashpassword');
const bcrypt = require('bcryptjs');
const Resturant = require('../mongoose-models/resturant_model');
const generate_UUID = require('./middleware/UUID');

require('dotenv').config();

const JWTpassword = process.env.JWTpassword;

const router = express.Router();

async function return_password(email){
    //if email exists then -->
    const pass = await prisma.user.findUnique({
        where:{
            email: email
        },

        select: {
            password: true
        }

    })

    return pass.password;
}

//signup for users
router.post('/signup', async function(req, res){
    const {username, email, password} = req.body;
    const user_email = await prisma.user.findUnique({ where:{email: email}});
    if(user_email){
        res.status(201).send('email already exists.');
    }
    else{
        const hashedPassword = await hashPassword(password);
        await prisma.user.create({ data: {username: username, email: email, password: hashedPassword} });
        res.status(201).send('User has been created');
    }

})

//sigin for users
router.post('/signin', async function(req, res){
    const {username, email, password} = req.body;
    const user_email = await prisma.user.findUnique({where: {email: email}});
    if(user_email){
        const DB_password = await return_password(email);
        const match_password = await bcrypt.compare(password, DB_password);
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
    const { username, resturant_name, email, password, address } = req.body;
    const resturant_email = await prisma.resturant.findUnique({where:{ email: email}});
    if(resturant_email){
        res.status(401).send("resturant has been registed before");
    }
    else{
        const hashedPassword = await hashPassword(password);
        await prisma.resturant.create({data: {username: username, resturant_name: resturant_name, email: email, password: hashedPassword}});
        res.status(201).send("Your resturant has been created.");
    }
})

//signin page for resturants
router.post('/resturant/signin', async function(req, res){
    const{ username, email, password } = req.body;
    const resturant_email = await Resturant.findOne({ email: email});
    if(resturant_email ){
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