import express from 'express'
import schema from './schema'

import {graphql} from 'graphql'
import bodyParser from 'body-parser'
import cors from 'cors'

let app = express()
let PORT = 3003

app.use(cors())

app.use(bodyParser.text({type: 'application/graphql'}))

app.get('/graphql', (req, res) => {
  res.send('Hello22222222')
})

app.post('/graphql', (req, res) => {
  console.log(req.body)
  graphql(schema, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2))
  })
  // res.send('200')
})

let server = app.listen(PORT, function() {
  let host = server.address().address
  let port = server.address().port

  // console.log(server.address())

  console.log('GraphQL listening at http://%s:%s', host, port)
})