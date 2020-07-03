// неактивный миддлвэр
// можно использовать для роутов, которые требуют авторизации (например, при биллинге)

module.export = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({error: 'You must log in!'})
  }

  next()
}