import Head from 'next/head'
import { useState } from 'react'
import debounce from 'lodash.debounce'
import Pokemon from '../components/Pokemon'

export async function getStaticProps() {  
  const maxPokes = 301
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
  const [ inputSearch, setInputSearch ] = useState('')

  // const debounceChange = debounce(handleChange, 1000)

  return (
    <>
      <Head>
        <title>Início</title>
        <meta name="keywords" content="Pokemons" />
        <meta name="description" content="Pokedex desenvolvida com Next.js" />
      </Head>
      <div style={{ padding: '2rem 1rem', flexGrow: 1 , marginLeft: '10rem'}}>
        <div style={{ display: 'flex', padding: '0 1rem', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
          <input
            style={{ width: '50%', padding: '1rem 3rem', border: '1px solid rgb(219, 219, 219)', borderRadius: '15px', fontSize:  '1.5rem', boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 5px' }} 
            type="text" 
            placeholder='Search pokemon...'
            onChange={debounceChange} 
            value={inputSearch}
          />
        </div>
        <main style={{  }}>
          <div>
            <ul style={{ display: 'flex', flexWrap: 'wrap' ,listStyle: 'none', }}>
              { pokemons.map((item, i) => (
                <li key={i}><Pokemon search={inputSearch} pokemon={item}/></li>
              )) }
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}