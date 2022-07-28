const express = require('express')
require('dotenv').config()
// const fruits = require('./models/fruits');
const app = express();
const port = process.env.PORT || 3003;

//setting up our views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //Initialzing our engine

// My route // Index.jsx
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});


// My port
app.listen(port,() => {
    console.log('I am listening on port' , port);
});