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

const defaultDecoratorKeys = {
  serve: 'serve'
}

function plugin (felid, options) {
  const decoratorKeys = (options && options.decorator)
    ? {
      ...defaultDecoratorKeys,
      ...options.decorator
    }
    : defaultDecoratorKeys
  felid.decorateResponse(decoratorKeys.serve, serve(options))
}

module.exports = plugin
