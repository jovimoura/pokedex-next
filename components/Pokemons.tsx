import { Pokemon } from './Pokemon'

interface PokemonsProps {
  pokemons?: {
    name?: string
  }[]
  pokemonName?: string
}

export const Pokemons = ({ pokemons, pokemonName }: PokemonsProps) => {
  const pokemonsFiltered = pokemonName
    ? pokemons?.filter(item => item.name?.includes(pokemonName))
    : []
  
  const getPokemons = () => {
    if (pokemonName === '' || !pokemonName) {
      return pokemons?.map((item, i) => (
        <li key={i}>
          <Pokemon pokemon={item} />
        </li>
      ))
    } else {
      return pokemonsFiltered?.map((item, i) => (
        <li key={i}>
          <Pokemon pokemon={item} />
        </li>
      ))
    }
  }

  return (
    <div>
      <ul className="flex flex-wrap list-none justify-center">
        {getPokemons()}
      </ul>
    </div>
  )
}
