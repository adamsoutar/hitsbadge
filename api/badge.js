import countapi from 'countapi-js'
import provideBadge from '../lib/provide-badge'

module.exports = async (req, res) => {
  if (!req.query.id) {
    return provideBadge(res, 'error', 'No id provided', 'critical')
  }

  const { value } = await countapi.hit('hitsbadge', req.query.id)

  provideBadge(res, 'hits', value, 'brightgreen')
}
