const mongoose = require('mongoose')
const Main = mongoose.model('main')
const Level = mongoose.model('level')

module.exports = app => {
  app.post('/api/main', async (req, res) => {

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
  })

  app.get('/api/main', async (req, res) => {
    
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
  })

  app.delete('/api/main/:id', async (req, res) => {
    const id = req.params.id;
    Level.remove({id: id})
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
}