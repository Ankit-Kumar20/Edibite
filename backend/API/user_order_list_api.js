const express = require('express');
const router = express.Router();
const User_order = require('../mongoose-models/user_order_model');

router.post('/placeorder', async function (req, res) {
    const { username, ph_no, resturant_id, item, no_item} = req.body;
    try{
        await User_order.create({ username, ph_no, resturant_id, item, no_item }, (err, res)=> {
            if(err){
                console.error(err);
            }
            else{
                console.log("successfully order has been placed.");
            }
        });
        res.status(201).send("Order has been placed");
    }
    catch(err){
        res.status(500).send('something went wrong');
    }
    
})

router.get('/userorderlist', async function(req, res){
    const { username, ph_no } = req.body;
    const userorderlist = await User_order.find({ ph_no: ph_no });
    if(!userorderlist){
        res.status(404).send('No order has been placed.');
    }
    else{
        res.status(201).send(userorderlist);
    }

})


module.exports = router;