import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import { useEffect, useState } from "react";
import React, { useEffect } from 'react'
import styles from '../../styles/PokemonId.module.css'

export const getStaticPaths = async () => {
  const maxPokes = 411
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokes}`)
  const data = await res.json()

  const paths = data.results.map((item, i) => {
    return {
      params: { pokemonId: (i + 1).toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const id = context.params.pokemonId
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()

  return {
    props: { pokemon: data }
  }
}

export default function Pokemon({ pokemon }) {
  const [typeColor, setTypeColor] = React.useState('transparent')
  const abilities = pokemon.abilities
  const stats = pokemon.stats
  const types = pokemon.types

  useEffect(() => AOS.init({ duration: 1000 }), [])

  function changeColor() {
    switch (types[0].type.name) {
      case 'fire':
        setTypeColor('#f54f4f')
        break
      case 'grass':
        setTypeColor('#49D0B0')
        break
      case 'water':
        setTypeColor('#76BEFE')
        break
      case 'electric':
        setTypeColor('#FCC719')
        break
      case 'dragon':
        setTypeColor('#f1a541')
        break
      case 'poison':
        setTypeColor('#BA68C8')
        break
      case 'normal':
        setTypeColor('#FFD289')
        break
      case 'bug':
        setTypeColor('#77B28C')
        break
      case 'ground':
        setTypeColor('#C5A48A')
        break
      case 'rock':
        setTypeColor('#A27035')
        break
      case 'fighting':
        setTypeColor('#F44E3F')
        break
      case 'fairy':
        setTypeColor('#F9D4BB')
        break
      case 'ice':
        setTypeColor('#AEECEF')
        break
      case 'psychic':
        setTypeColor('#EEC8E0')
        break
      case 'steel':
        setTypeColor('#C1B4AE')
        break
      case 'dark':
        setTypeColor('#71677C')
        break
      default:
        break
    }
  }

  React.useEffect(() => changeColor(), [types])

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  return (
    <>
      <Head>
        <title>{capitalize(pokemon.name)}</title>
        <link
          rel="shortcut icon"
          href={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          type="image/x-icon"
        />
      </Head>
      <Link href="/">
        <a className={styles.back}>Back</a>
      </Link>
      <div
        data-aos="zoom-in-up"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          margin: '1rem'
        }}
      >
        <div
          style={{
            borderRadius: '15px',
            boxShadow: 'rgb(0 0 0 / 30%) 1px 5px 8px'
          }}
        >
          <div
            style={{
              backgroundColor: typeColor,
              border: `1px solid ${typeColor}`,
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#212121'
                }}
              >
                {pokemon.name}
              </h1>
              <h1
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  color: '#212121'
                }}
              >
                N°{pokemon.id}
              </h1>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '2rem'
              }}
            >
              {types.map((item, i) => (
                <span
                  key={i}
                  style={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    border: '1px solid black',
                    boxShadow: 'rgb(100 100 111 / 20%) 0px 7px 29px 0px',
                    opacity: '0.7',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '15px',
                    padding: '0 1rem'
                  }}
                >
                  {item.type.name}
                </span>
              ))}
              <span></span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '2rem'
              }}
            >
              <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
              />
            </div>
          </div>
          <div style={{ display: 'flex', margin: '2rem' }}>
            <div style={{ margin: '0 1rem' }}>
              <h1 style={{}}>Abilities</h1>
              <ul>
                {abilities.map((item, i) => {
                  return (
                    <li key={i} style={{ textTransform: 'uppercase' }}>
                      {item.ability.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div style={{ margin: '0 1rem' }}>
              <h1>Stats</h1>
              <ul>
                {stats.map((item, i) => {
                  return (
                    <li key={i}>
                      <a style={{ textTransform: 'uppercase' }}>
                        {item.stat.name}
                      </a>
                      : {item.base_stat}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
