import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { InputSearch } from '../components/Input'
import { Pokemons } from '../components/Pokemons'
import { Spinner } from '../components/Spinner'

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

export async function getStaticProps() {
  const maxPokes = 150
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokes}`)
  const data: DataPokemons = await res.json()

  data.results.map((item: any, i: number) => {
    item.id = i + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

const Home: NextPage = ({ pokemons }: any) => {
  const [search, setSearch] = useState('')

  return (
    <div className="w-full flex flex-1 min-h-screen flex-col items-center">
      <Head>
        <title>Pokédex</title>
        <link
          rel="icon"
          href="https://img.icons8.com/stickers/100/000000/pokeball.png"
        />
      </Head>
      <InputSearch
        className="bg-transparent focus:outline-none w-4/5 dark:text-gray-50 dark:placeholder:text-gray-50"
        onChange={e => setSearch(e.target.value)}
        placeholder="search pokemon"
      />
      {pokemons.length > 0 ? (
        <Pokemons pokemons={pokemons} pokemonName={search} />
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default Home
