const express = require('express');
const Food = require('../mongoose-models/food_list_model');

const router = express.Router();

router.post('/foodlist', async function(req, res){
    const { resturant_name, resturant_id, food } = req.body;
    try{    
        await Food.create({ resturant_name: resturant_name, resturant_id: resturant_id, food: food });
        res.status(201).send("successfully added.");
    }
    catch(err){
        res.status(500).send('Something went wrong.');
    }
})


module.exports = router;