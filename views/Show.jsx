const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

    class Show extends React.Component {
      render() {
        const { pokemon } = this.props;
          return (
                  <div style = {myStyle}>
                      <h1> "Gotta Catch 'Em All" </h1>
                      <h2> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h2>
                      <img src={pokemon.img + '.jpg'}></img>
                      <br/>
                      <br/>
                      <a href={/pokemon/}>BACK</a>  
                  </div>
          );
      }
    }

module.exports = Show;

