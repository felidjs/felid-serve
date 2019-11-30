# felid-serve

[![npm version](https://img.shields.io/npm/v/felid-serve.svg)](https://www.npmjs.com/package/felid-serve) [![Build Status](https://travis-ci.com/felidjs/felid-serve.svg?branch=master)](https://travis-ci.com/felidjs/felid-serve) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

For plugin options, please check [send](https://github.com/pillarjs/send).

Some has default values:

- **root**: default to the directory where node runs.

## License

[MIT](./LICENSE)
