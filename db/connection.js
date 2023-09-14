// MONGOOSE CONFIGIRATION
require('dotenv').config()
const mongoose = require('mongoose')

//  connnect to Mongoose 
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
});

mongoose.connection
    .on("open", () => console.log('Connected to Mongoose'))
    .on("closed", () => console.log('Connection Closed'))
    .on("error", (e) => console.log('Error Occured, e'));

module.exports= mongoose