const React = require('react')

const myStyle = {
  color: '#ffcc00',
  backgroundColor: '#0066cc',
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

class New extends React.Component {
    render() {
        return (
            <div style = {{...myStyle,...myStyle2}}>
                <h1>New Pokemon Page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/pokemon" method="POST">
                  Name: <input type="text" name="name" /><br/><br/>
                  Image: <input type="text" name="img" /><br/><br/>
                  <input type="submit" name="" value="Transfer Pokemon to Pokedex"/>
                  <br/>
                  <br/>
                  <img src="https://i.imgur.com/jQCyhH0.gif"></img>
                </form>
            </div>)
        }
      }
 
module.exports = New