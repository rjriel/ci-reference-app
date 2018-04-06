
const crypto = require('crypto')

exports.createSha = (text) => {
  if (typeof text !== 'string') throw new TypeError('text must be a string!')
  return crypto.createHash('sha256').update(text).digest('hex')
}
