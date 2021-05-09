import countapi from 'countapi-js'
import provideBadge from '../lib/provide-badge'

module.exports = async (req, res) => {
  if (!req.query.id) {
    return provideBadge(res, 'ERROR', 'No id provided', 'critical')
  }

  const { value } = await countapi.hit('hitsbadge', req.query.id)

  provideBadge(res, 'Hits', value, 'brightgreen')
}
