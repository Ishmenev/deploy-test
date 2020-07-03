const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        socialId: profile.id,
        socialName: profile.name.givenName,
        socialLastName: profile.name.familyName
      })
      if(existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({
        socialId: profile.id, 
        socialName: profile.name.givenName,
        socialLastName: profile.name.familyName,
        social: 'Google',
        createdLevels: 0,
        completedLevels: 0,
        character: 'warrior',
        achievements: [
            'novice'
        ]
      }).save()
      done(null, user)  
    }
  )
)

passport.use(
  new VKontakteStrategy(
    {
      clientID: keys.vkClientID,
      clientSecret: keys.vkClientSecret,
      callbackURL:  "/auth/vkontakte/callback",
      apiVersion: '5.21',
      proxy: true
      },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({
        socialId: profile.id,
        socialName: profile.name.givenName,
        socialLastName: profile.name.familyName
      })
      if(existingUser) {
        return done(null, existingUser)
      }
      const user = await new User({
        socialId: profile.id, 
        socialName: profile.name.givenName,
        socialLastName: profile.name.familyName,
        social: 'VKontakte',
        createdLevels: 0,
        completedLevels: 0,
        character: 'magician',
        achievements: [
            'novice'
        ]
      }).save()
      done(null, user)  
    }
  )
)

passport.use(
  new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: "/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'name'],
  proxy: true
},
async (accessToken, refreshToken, profile, done) => {  
  const existingUser = await User.findOne({
    socialId: profile.id,
    socialName: profile.name.givenName,
    socialLastName: profile.name.familyName
  })
  if(existingUser) {
    return done(null, existingUser)
  }
  const user = await new User({
    socialId: profile.id, 
    socialName: profile.name.givenName,
    socialLastName: profile.name.familyName,
    social: 'Facebook',
    createdLevels: 0,
    completedLevels: 0,
    character: 'escapist',
    achievements: [
        'novice'
    ]
  }).save()
  done(null, user)
  }
));
  