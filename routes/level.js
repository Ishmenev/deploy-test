const mongoose = require('mongoose')
const Level = mongoose.model('level');

module.exports = app => {
    app.post('/api/level', async (req, res) => {
    
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

            req.user.createdLevels +=1
            const user = await req.user.save()
            res.send(user)

        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
        }
    });
    
    
    app.get('/api/level/:name', async (req, res) => {
        try {
            const level = await Level.findOne({ id: req.params.name });
            
            res.json(level)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
        }
    })
    
    app.get('/api/level', async (req, res) => {
        
        try {
            const level = await Level.find();
            
            res.json(level)
        } catch(err) {
            console.error(err);
            res.status(500).send('Server error')
        }
    })
}




