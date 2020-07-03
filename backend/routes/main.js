const express = require('express');
const router = express.Router();
const Main = require('../models/Main');
const Level = require('../models/Level');
const { check, validationResult } = require('express-validator/check')

// @route POST api/main
// @desc  Add main
// @access Public

router.post('/', async (req, res) => {

    try {
        const newMain = new Main({
            id: Date.now().toString(),
            title: req.body.title,
            text: req.body.text
        })
        const main = await newMain.save()
        res.json(main)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});

router.get('/', async (req, res) => {
    
    try {
        const main = await Main.find();
        const level = await Level.find();
        const data = {
            properties: main,
            levels: level
        };
        res.json(data)
        
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    Level.remove({_id: id})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })

})

module.exports = router;