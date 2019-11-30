const fs = require('fs')
const path = require('path')
const Felid = require('felid')
const injectar = require('injectar')
const serve = require('../src')

const fileContent = fs.readFileSync('./test/static/index.html').toString('utf8')

test('Should send files', (done) => {
  const instance = new Felid()
  instance.plugin(serve)
  instance.get('/test', (req, res) => {
    res.serve('test/static/index.html')
  })

  injectar(instance.lookup())
    .get('/test')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.payload).toBe(fileContent)
      done()
    })
})

test('Should set correct options', (done) => {
  const instance = new Felid()
  instance.plugin(serve, {
    root: path.resolve(__dirname, 'static')
  })
  instance.get('/test', (req, res) => {
    res.serve('index.html')
  })

  injectar(instance.lookup())
    .get('/test')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.payload).toBe(fileContent)
      done()
    })
})

test('Should set custom decorator property name', (done) => {
  const instance = new Felid()
  instance.plugin(serve, {
    root: path.resolve(__dirname, 'static'),
    decorator: {
      serve: 'static'
    }
  })
  instance.get('/test', (req, res) => {
    res.static('index.html')
  })

  injectar(instance.lookup())
    .get('/test')
    .end((err, res) => {
      expect(err).toBe(null)
      expect(res.statusCode).toBe(200)
      expect(res.payload).toBe(fileContent)
      done()
    })
})
