const React = require('react')

const myStyle = {
    color: '#ffcc00',
    backgroundColor: '#991f00',
    fontSize: '1.3em',
  }
  
  const myStyle2 = {
    display: "flex",
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flexStart',
    flexDirection: 'column',
    height: '100vh',
  }

class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <div style={{...myStyle,...myStyle2}}>
                <h1>Edit Pokemon Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
                  Name: <input type="text" name="name" /><br/><br/>
                  Image: <input type="text" name="img" /><br/><br/>
                  <input type="submit" name="" value="Edit Pokemon in Pokedex"/>
                  <br/>
                  <br/>
                  <img src="https://i.imgur.com/jQCyhH0.gif"></img>
                </form>
            </div>)
        }
      }
 
module.exports = Edit