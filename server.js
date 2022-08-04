const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const Pokemon = require('./models/pokemon');
const app = express();
const port = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//setting up our views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //Initialzing our engine

// My route // Index.jsx
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.use(express.urlencoded({extended:false}));

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon/', (req, res) => {
    let name = req.body.name.split('');
    name[0] = name[0].toUpperCase()
    req.body.name = name.join('')

    Pokemon.create(req.body, (err, createdPokemon) => {
        res.redirect('/pokemon');
    });
});

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
 });  

// My port
app.listen(port,() => {
    console.log('I am listening on port' , port);
});