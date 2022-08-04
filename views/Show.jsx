const React = require('react');

const myStyle = {
  color: '##ffcc00',
  backgroundColor: '#d9d9d9',
};

const myStyle2 = {
  display: "flex",
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'flexStart',
  flexDirection: 'column',
  height: '100vh',
}

const button = {
  borderRadius: '25px',
  backgroundColor: '#FFCC00',
}
    class Show extends React.Component {
      render() {
        const pokemon = this.props.pokemon;
          return (
                  <div style = {{...myStyle,...myStyle2}}>
                      <h1> "Gotta Catch 'Em All" </h1>
                      <h2> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                      <img src={pokemon.img}></img>
                      {/* <img src={pokemon.img + '.jpg'}></img> */}
                      <br/>
                      <a href={/pokemon/}>
                        <button>Back</button>
                      </a>  
                  </div>
          );
      }
    }

module.exports = Show;

