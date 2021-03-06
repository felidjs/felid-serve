# felid-serve

[![npm version](https://img.shields.io/npm/v/felid-serve.svg)](https://www.npmjs.com/package/felid-serve)
![Node.js CI](https://github.com/felidjs/felid-serve/workflows/Node.js%20CI/badge.svg)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![codecov](https://codecov.io/gh/felidjs/felid-serve/branch/master/graph/badge.svg)](https://codecov.io/gh/felidjs/felid-serve)

A [Felid](https://github.com/felidjs/felid) plugin for sending static files.

## Install

```bash
npm install felid-serve
```

or

```bash
yarn add felid-serve
```

## Usage

```javascript
const Felid = require('felid')
const serve = require('felid-serve')

const app = new Felid()
app.plugin(serve, options)

app.get('/', (req, res) => {
  res.serve('/static/index.html')
})
```

## Options

- **decorator** *Object*: Customize the decorator names. Default is:
```js
{
  serve: 'serve'
}
```

For more options, please check [send](https://github.com/pillarjs/send#options).

Some has default values:

- **root**: default to the directory where node runs.

## Api

- **response.serve(path: String, options: Object)**: Serve the given file. The options passed here will override the plugin options.

## License

[MIT](./LICENSE)
