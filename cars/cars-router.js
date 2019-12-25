const express = require('express');

const router = express.Router();

const db = require('../utils/db'); //db access using knex



//GET All
router.get('/', async (req, res, next) => {

    try{

        // db.select('*').from("accounts"))

        res.json(await db("cars"));

    }catch (err) {

        next(err);
        
    }
  
});


//GET by ID
router.get('/:id', async (req, res, next) => {
  
    const { id } = req.params

    try{

        // db("accounts").where( {id:1} )

        res.json(await db("cars").where( { id } ));

    }catch (err) {

        next(err);
        
    }

});


//POST
router.post('/', async (req, res, next) => {

    const {vin, make, model, mileage, transmission_type, title_status} = req.body
    
    try{

        res.json(await db("cars").insert( { 
            vin: vin, 
            make: make,
            model: model,
            mileage: mileage,
            transmission_type: transmission_type,
            title_status: title_status
         } ));

    }catch (err) {

        next(err);
        
    }

});


//Update/Put
router.put('/:id', async (req, res, next) => {

    const { id } = req.params

    const { name, budget } = req.body

    try{

        res.json(await db("accounts").where({ id }).update( { name: name, budget: budget } ));

    }catch (err) {

        next(err);
        
    }
  
});


//Delete
router.delete('/:id', async (req, res, next) => {

    const { id } = req.params

    try{

        res.json(await db("accounts").where({ id }).del());

    }catch (err) {

        next(err);
        
    }

});



module.exports = router;