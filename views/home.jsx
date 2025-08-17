const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <head>

            <link rel="stylesheet" href="/css/style2.css" />

           </head>


            <main>
    <h1>HOME</h1>
    <div >
      <img height="300" width="500" src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
      <div>
        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button class="testing-home">test</button><button className="btn-primary">Places Page</button>
    </a>
</main>
        </Def>
    )
}

module.exports = home