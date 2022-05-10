import Head from 'next/head'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MainPokemons from '../components/MainPokemons'
import useDebounce from '../hooks/useDebounce'

export async function getStaticProps() {
  const maxPokes = 411
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokes}`)
  const data = await res.json()

  data.results.map((item, i) => {
    item.id = i + 1
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  const [inputSearch, setInputSearch] = useState('')
  const debouncedInput = useDebounce(inputSearch, 500)

  useEffect(
    () => AOS.init({ duration: 1000 }),
    []
  )

  return (
    <>
      <Head>
        <title>Início</title>
        <meta name="keywords" content="Pokemons" />
        <meta name="description" content="Pokedex desenvolvida com Next.js" />
        <link rel="shortcut icon" href="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-pokeball-video-games-those-icons-lineal-color-those-icons.png" type="image/x-icon" />
      </Head>
      <div data-aos="fade-up" style={{ padding: '2rem 1rem', flexGrow: 1, marginLeft: '10rem' }}>
        <div
          style={{
            display: 'flex',
            padding: '0 1rem',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          <input
            style={{
              width: '50%',
              padding: '1rem 3rem',
              border: '1px solid rgb(219, 219, 219)',
              borderRadius: '15px',
              fontSize: '1.5rem',
              boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 5px'
            }}
            type="text"
            placeholder="Search pokemon..."
            onChange={e => setInputSearch(e.target.value)}
            value={inputSearch}
          />
        </div>
        <main>
          <MainPokemons pokemons={pokemons} pokemonName={debouncedInput} />
        </main>
      </div>
    </>
  )
}
