const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Pokemon = require('./models/pokemon')
const app = express()
const port = process.env.PORT || 3003
const methodOverride = require('method-override')
const { application } = require('express')
const pokemonData = require('./utilities/pokemonData')

// DB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

//setting up our views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine()) //Initialzing our engine

// See route
app.get('/pokemon/seed', (req,res) => {
    // comment the line below if you don't want to delete your whole entire collection
    // Pokemon.deleteMany({}) -> currently not working
    // Create a list of pokemon
    Pokemon.create(pokemonData)
})

// My route // Index.jsx
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

// Middelware
app.use(express.urlencoded({extended:false}))
// Calling method
app.use(methodOverride('_method'))

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {
            pokemon: allPokemon
        })
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.post('/pokemon/', (req, res) => {
    let name = req.body.name.split('')
    name[0] = name[0].toUpperCase()
    req.body.name = name.join('')

    Pokemon.create(req.body, (err, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
 })

app.get('/pokemon/:id/edit', (req,res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.render('Edit', {
                pokemon: foundPokemon
            })
        } else {
            res.send({
                message: error.message
            })
        }
    })
})

// Update route
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pokemon) => {
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

//  Delete route
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})


// My port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})