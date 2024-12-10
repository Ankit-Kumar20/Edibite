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

//for user_Auth
async function return_password_user(email){
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

//for resturant Auth
async function return_password_resturant(email){
    //if email exists then -->
    const pass = await prisma.resturant.findUnique({
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
    const {username, phone_no, email, password} = req.body; //name:     //mobile:   //email:    //password:
    try{
        const user_email = await prisma.user.findUnique({ where:{email: email}});
        if(user_email){
            res.status(201).send('email already exists.');
        }
        else{
            const hashedPassword = await hashPassword(password);
            await prisma.user.create({ data: {username: username, phone_no: phone_no, email: email, password: hashedPassword} });
            res.status(201).send('User has been created');
        }
    }
    catch(err){
        console.log(err.message)
    }
})

//sigin for users
router.post('/signin', async function(req, res){
    const {username, email, password} = req.body;
    const user_email = await prisma.user.findUnique({where: {email: email}});
    if(user_email){
        const DB_password = await return_password_user(email);
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
        res.status(201).send('user has not signed_up');
    }
})

//siginup page for resturants
router.post('/resturant/signup', async function(req, res){
    const { resturant_name, phone_no, email, password } = req.body;
    const resturant_email = await prisma.resturant.findUnique({where:{ email: email}});
    if(resturant_email){
        res.status(201).send("resturant has been registed before");
    }
    else{
        const hashedPassword = await hashPassword(password);
        await prisma.resturant.create({data: {resturant_name: resturant_name, phone_no: phone_no, email: email, password: hashedPassword}});
        res.status(201).send("Your resturant has been created.");
    }
})

//signin page for resturants
router.post('/resturant/signin', async function(req, res){
    const{ email, password } = req.body;
    const resturant_email = await prisma.resturant.findUnique({where: { email: email}});
    if(resturant_email){
        const DB_password = await return_password_resturant(email);
        const match_password = await bcrypt.compare(password, DB_password);
        if(!match_password){
            res.status(201).send('Invalid credentials');
        }
        else{
            const resturant_token = jwt.sign({email:email, password: hashedPassword});
            res.status(201).send({resturant_token});
        }
    }
    else{
        res.status(201).send('restaurant has not registered.')
    }
})

module.exports = router;