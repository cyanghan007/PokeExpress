const React = require('react')
const pokemon = require('../models/pokemon')
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

    class Index extends React.Component {
      render() {
        const { pokemon } = this.props
          return (
            <div style = {{...myStyle,...myStyle2}}> 
                <h1>See All The Pokemon</h1>
                  <ul>
                    {pokemon.map((pokemon) => {
                      return (
                        <li>
                          <a href={`/pokemon/${pokemon.id}`}>
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method='POST'><button type="submit">Delete</button>
                            </form>
                            <a href={`/pokemon/${pokemon.id}/edit`}>Edit pokemon</a>
                          </a>
                        </li>
                    )
                  })}
                  </ul>
                  <nav>
                    <a href="/pokemon/new">
                      <button>Catch Another Pokemon</button>
                    </a>
                  </nav>  
            </div>    
            
          )
      }
    }

    module.exports = Index

