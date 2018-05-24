const express = require ('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller')
    , massive = require('massive');
    require('dotenv').config();

const app = express()

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

app.use(bodyParser.json());

massive ( process.env.CONNECTION_STRING )
.then ( db => { 
    app.set('db', db)
    console.log('database connected')
}).catch(err => {
    console.log(err)
})

app.get('/api/houses', controller.getAll)
app.post('/api/house/:id', controller.create)
app.delete('/api/house/:id', controller.delete)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))