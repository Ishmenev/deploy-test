const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/Main')
require('./models/Level')
require('./models/User')
require('./services/passport')
const main = require('./routes/main')
const level = require('./routes/level')
const authRoutes = require('./routes/authRoutes')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, console.log('База данных подключена'))

const app = express()

app.use(express.json({ extended: true }));

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

main(app)
level(app)
authRoutes(app)

// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static(path.join(__dirname, 'client/build')))

// Express will serve up the index.html file
// if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Проект запущен на порту ${PORT}`)
})

