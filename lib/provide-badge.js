import axios from 'axios'

module.exports = async (res, label, message, colour) => {
  const badgeUrl = `https://img.shields.io/static/v1?label=${label}&message=${message}&color=${colour}`

  const { data: badgeSVG } = await axios.get(badgeUrl)

  res.setHeader('Content-Type', 'image/svg+svg+xml;charset=utf-8')
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  res.send(badgeSVG)
}
