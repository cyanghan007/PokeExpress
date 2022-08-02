const express = require('express')
require('dotenv').config()
const pokemon = require('./models/pokemon');
const app = express();
const port = process.env.PORT || 3003;

//setting up our views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //Initialzing our engine

// My route // Index.jsx
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
   let firstLetterCap = pokemon.map(item => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase());
    res.render('Index', {pokemon: pokemon});
});

app.get('/pokemon/:id', (req, res) => {
     res.send(req.params.id);
 });  

// My port
app.listen(port,() => {
    console.log('I am listening on port' , port);
});