const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback', 
    passport.authenticate('google', { 
      successRedirect: '/account/',
      failureRedirect: '/error/'
    })
  )

  app.get(
    '/auth/vkontakte',
    passport.authenticate('vkontakte', {
      scope: ['profile', 'email']
    })
  )

  app.get(
    '/auth/vkontakte/callback', 
    passport.authenticate('vkontakte', { 
      successRedirect: '/account/',
      failureRedirect: '/error/'
    })
  )

  app.get(
    '/auth/facebook',
    passport.authenticate('facebook')
  )

  app.get(
    '/auth/facebook/callback', 
    passport.authenticate('facebook', { 
      failureRedirect: '/error/'
    }),
    (req, res) => {
      res.redirect('/account/')
    }
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

};





