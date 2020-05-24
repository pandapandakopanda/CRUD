/* eslint-disable */

const express = require('express')
const bodyParser = require('body-parser')

const users = require('./Users')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())


const port = 3000

app.listen(port, function(err){
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

app.post('/users', function(req, res){
  const data = req.body
  users.add(data)
})

app.post('/fillUsers', function(req,res){
  const users = req.body
  console.log('users in fillUsers: ', users);
  users.fillUsers(users)
})

app.get('/getUser', function(req,res){
  const data = users.users
  res.send(JSON.stringify(data))
})

app.post('/checkLogin', function(req,res){
  const data = req.body
  res.send(users.checkData(data))
})