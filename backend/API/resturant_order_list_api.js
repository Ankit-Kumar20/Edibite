const express = require('express');
const router = express.Router();
const User_order = require('../mongoose-models/user_order_model');

router.post('/orderlist', async function (req, res) {
    const { username, delivery } = req.body;
    try{
        await User_order.updateOne({username: username}, { $set: {delivery: delivery }}, (err, res)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log("updated successfully.")
            }
        });
    }
    catch(err){
        res.send(500).send('Something went wrong.');
    }
})

router.get('/orderlist', async function(req, res){
    const { resturant_id } = req.body;
    try{
        const userorderlist = await User_order.find({ resturant_id });
        if(!userorderlist){
            res.status(400).send('No order has been placed.');
        }
        res.status(201).send(userorderlist);
    }
    catch(err){
        console.log(err.message);
    }
})


module.exports = router