const send = require('send')
const path = require('path')

function serve (opt) {
  const rootOptions = {
    root: path.resolve('./'),
    ...opt
  }
  return function (path, options) {
    send(this.request, path, {
      ...rootOptions,
      ...options
    }).pipe(this.res)
  }
}

function plugin (felid, options) {
  felid.decorateResponse('serve', serve(options))
}

module.exports = plugin
