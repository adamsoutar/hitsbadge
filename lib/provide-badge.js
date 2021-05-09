module.exports = (res, label, message, colour) => {
  res.redirect(
    `https://img.shields.io/static/v1?label=${label}&message=${message}&color=${colour}`
  )
}
