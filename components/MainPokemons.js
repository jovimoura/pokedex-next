import Pokemon from './Pokemon'

export default function MainPokemons({ pokemons, pokemonName }) {
  const pokemonsFiltered = pokemons.filter(item => item.name === pokemonName)

  const getPokemons = () => {
    if (pokemonName === '') {
      return pokemons.map((item, i) => (
        <li key={i}>
          <Pokemon pokemon={item} />
        </li>
      ))
    } else {
      return pokemonsFiltered.map((item, i) => (
        <li key={i}>
          <Pokemon pokemon={item} />
        </li>
      ))
    }
  }

  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none' }}>
        {getPokemons()}
      </ul>
    </div>
  )
}
