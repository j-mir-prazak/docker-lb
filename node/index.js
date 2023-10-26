import express from 'express'
const app = express()
const port = 1900

import { randomString } from './lib/helpers.js'

const server = randomString( 6 ) + "-" + randomString(7) + "-" + randomString(5)


app.get('/', (req, res) => {
  res.send(`Hello World from ${server}!`)
})

app.listen(port, () => {
  console.log(`${server} app listening on port ${port}`)
})
