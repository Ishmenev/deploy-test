const express = require('express');
const router = express.Router();
const Level = require('../models/Level');


router.post('/', async (req, res) => {
    
    try {
        const newLevel = new Level({
            id: Date.now().toString(),
            title: req.body.title,
            width: req.body.width,
            height: req.body.height,
            description: req.body.description,
            image: req.body.image,
            type: 'creative',
            player: req.body.player,
            level: req.body.level
        })
        const main = await newLevel.save()
        res.json(main)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});


router.get('/:name', async (req, res) => {
    try {
        const level = await Level.findOne({ id: req.params.name });
        
        res.json(level)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
})

router.get('/', async (req, res) => {
    
    try {
        const level = await Level.find();
        
        res.json(level)
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error')
    }
});




module.exports = router;