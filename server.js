const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config()
const cheeseController = require('./controllers/cheeseController')
const morgan = require('morgan')

app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))
app.use('/cheese', cheeseController)

// app.get('/', (req, res) => {
//     res.send('')
// })

app.get('/', (req, res) => {
    res.redirect('/cheese');
  });

app.listen(PORT,() => console.log(`Cheese-App on ${PORT}`))