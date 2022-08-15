import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { capitalize } from '../../utils/capitalize'

interface PokemonsProps {
  name: string
  url: string
}

interface DataPokemons {
  count: number
  next: string
  previous: any
  results: PokemonsProps[]
}

interface StatsType {
  base_stat: number
  effort: 0
  stat: {
    name: string
    url: string
  }
}

interface AbilitiesType {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export const getStaticPaths = async () => {
  const maxPokes = 150
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokes}`)
  const data: DataPokemons = await res.json()

  const paths = data.results.map((item: any, i: number) => ({
    params: { pokemonID: (i + 1).toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonID
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data: DataPokemons = await res.json()

  return {
    props: { pokemon: data }
  }
}

const Pokemon = ({ pokemon }: any) => {
  const [bgColor, setBgColor] = useState<string>('transparent')
  const abilities: AbilitiesType[] = pokemon.abilities
  const stats: StatsType[] = pokemon.stats
  const types: any = pokemon.types

  const changeColor = () => {
    switch (types[0].type.name) {
      case 'fire':
        setBgColor('bg-types-fire')
        break
      case 'grass':
        setBgColor('bg-types-grass')
        break
      case 'water':
        setBgColor('bg-types-water')
        break
      case 'electric':
        setBgColor('bg-types-electric')
        break
      case 'dragon':
        setBgColor('bg-types-dragon')
        break
      case 'poison':
        setBgColor('bg-types-poison')
        break
      case 'normal':
        setBgColor('bg-types-normal')
        break
      case 'bug':
        setBgColor('bg-types-bug')
        break
      case 'ground':
        setBgColor('bg-types-ground')
        break
      case 'rock':
        setBgColor('bg-types-rock')
        break
      case 'fighting':
        setBgColor('bg-types-fighting')
        break
      case 'fairy':
        setBgColor('bg-types-fairy')
        break
      case 'ice':
        setBgColor('bg-types-ice')
        break
      case 'psychic':
        setBgColor('bg-types-psychic')
        break
      case 'steel':
        setBgColor('bg-types-steel')
        break
      case 'dark':
        setBgColor('bg-types-dark')
        break
      default:
        break
    }
  }

  useEffect(() => changeColor(), [])

  return (
    <div className='p-4'>
      <Head>
        <title>{capitalize(pokemon.name)}</title>
        <link
          rel="shortcut icon"
          href={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          type="image/x-icon"
        />
      </Head>
      <Link href="/">
        <a className='hover:underline'>Back</a>
      </Link>
      <div className="flex flex-1 h-auto w-full justify-center flex-col md:flex-row">
        <div className={`${bgColor} flex flex-col items-center p-4`}>
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="400"
            height="400"
            className="w-80 h-80"
          />
          <h2 className='uppercase font-bold text-gray-900'>N°{pokemon.id}</h2>
          <h1 className="uppercase font-bold text-gray-900">{pokemon.name}</h1>
        </div>
        <div className="flex dark:bg-gray-400 p-4">
          <div>
            <div className='m-4'>
              <h2 className="uppercase font-bold">Stats</h2>
              <ul>
                {stats.map((item, i) => (
                  <li className="uppercase" key={i}>
                    {item.stat.name + ': ' + item.base_stat}
                  </li>
                ))}
                <li className="uppercase">Weight: {pokemon.weight}</li>
              </ul>
            </div>
            <div className='m-4'>
              <h2 className="uppercase font-bold">Types</h2>
              <ul>
                {types.map((item: any, i: number) => (
                  <li className="uppercase" key={i}>
                    {item.type.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='m-4'>
            <h2 className="uppercase font-bold">Abilities</h2>
            <ul>
              {abilities.map((item, i) => (
                <li className="uppercase" key={i}>
                  {item.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
