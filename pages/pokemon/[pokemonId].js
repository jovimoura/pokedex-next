import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";
import React from "react";
import styles from '../../styles/PokemonId.module.css'

export const getStaticPaths = async () => {
  const maxPokes = 301;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokes}`);
  const data = await res.json();

  const paths = data.results.map((item, i) => {
    return {
      params: { pokemonId: (i + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  const [typeColor, setTypeColor] = React.useState("transparent");
  console.log(pokemon);
  const abilities = pokemon.abilities;
  const stats = pokemon.stats;
  const types = pokemon.types;
  console.log('types', types)
  console.log('abilities', abilities)
  console.log('stats', stats)

  function changeColor() {
    if (types[0].type.name === "fire") {
      setTypeColor("#f54f4f");
    }
    if (types[0].type.name === "grass") {
      setTypeColor("#49D0B0");
    }
    if (types[0].type.name === "water") {
      setTypeColor("#76BEFE");
    }
    if (types[0].type.name === "electric") {
      setTypeColor("#FCC719");
    }
    if (types[0].type.name === "dragon") {
      setTypeColor("#f1a541");
    }
    if (types[0].type.name === "poison") {
      setTypeColor("#BA68C8");
    }
    if (types[0].type.name === "normal") {
      setTypeColor("#FFD289");
    }
    if (types[0].type.name === "bug") {
      setTypeColor("#77B28C");
    }
    if (types[0].type.name === "ground") {
      setTypeColor("#C5A48A");
    }
    if (types[0].type.name === "rock") {
      setTypeColor("#A27035");
    }
    if (types[0].type.name === "fighting") {
      setTypeColor("#F44E3F");
    }
    if (types[0].type.name === "fairy") {
      setTypeColor("#F9D4BB");
    }
    if (types[0].type.name === "ice") {
      setTypeColor("#AEECEF");
    }
    if (types[0].type.name === "psychic") {
      setTypeColor("#EEC8E0");
    }
    if (types[0].type.name === "steel") {
      setTypeColor("#C1B4AE");
    }
    if (types[0].type.name === "dark") {
      setTypeColor("#71677C");
    }
  }

  React.useEffect(() => changeColor(), [types]);

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

  return (
    <>
      <Head>
        <title>{capitalize(pokemon.name)}</title>
      </Head>
      <Link href="/">
        <a className={styles.back}>Back</a>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          marginTop: "2rem",
          marginBottom: '2rem'
        }}
      >
        <div style={{ borderRadius: "15px", boxShadow: 'rgb(0 0 0 / 30%) 1px 5px 8px' }}>
          <div style={{ backgroundColor: typeColor, border: `1px solid ${typeColor}`, borderTopLeftRadius: '15px', borderTopRightRadius: '15px'  }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  color: "#212121",
                  
                }}
              >
                {pokemon.name}
              </h1>
              <h1
                style={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  color: "#212121",
                }}
              >
                N°{pokemon.id}
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2rem",
              }}
            >
              {types.map((item, i) => (
                <span
                  key={i}
                  style={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    border: "1px solid black",
                    boxShadow: "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
                    opacity: "0.7",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    padding: "0 1rem",
                  }}
                >
                  {item.type.name}
                </span>
              ))}
              <span></span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "2rem",
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
          <div style={{ display: "flex", margin: "2rem" }}>
            <div style={{ margin: "0 1rem" }}>
              <h1 style={{}}>Abilities</h1>
              <ul>
                {abilities.map((item, i) => {
                  return <li key={i} style={{ textTransform: 'uppercase' }}>{item.ability.name}</li>;
                })}
              </ul>
            </div>
            <div style={{ margin: "0 1rem" }}>
              <h1>Stats</h1>
              <ul>
                {stats.map((item, i) => {
                  return (
                    <li key={i}>
                      <a style={{textTransform: 'uppercase'}}>{item.stat.name}</a>: {item.base_stat}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
