import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Input } from "../components/Input";
import { Pagination } from "../components/Pagination";
import { Pokemons } from "../components/Pokemons";
import { Select } from "../components/Select";
import { Spinner } from "../components/Spinner";

interface PokemonsProps {
  name: string;
  url: string;
}

interface DataPokemons {
  count: number;
  next: string;
  previous: any;
  results: PokemonsProps[];
}

export async function getStaticProps() {
  const maxPokes = 150;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const res = await fetch(`${api}/?limit=${maxPokes}`);
  const data: DataPokemons = await res.json();

  data.results.map((item: any, i: number) => {
    item.id = i + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

const Home: NextPage = ({ pokemons }: any) => {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState("20");

  const indexOfLastCards = currentPage * parseInt(cardsPerPage);
  const indexOfFirstCards = indexOfLastCards - parseInt(cardsPerPage);
  const currentCards = pokemons.slice(indexOfFirstCards, indexOfLastCards);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className='w-full flex flex-1 min-h-screen flex-col items-center'>
      <Head>
        <title>Pokédex</title>
        <link
          rel='icon'
          href='https://img.icons8.com/stickers/100/000000/pokeball.png'
        />
      </Head>
      <h1 className='text-3xl font-semibold text-gray-200 italic my-5 leading-5'>
        Search your favorite...
      </h1>
      <div className='w-full flex items-end justify-center gap-5 flex-col md:flex-row'>
        <Input
          className='bg-transparent focus:outline-none w-2/5 dark:text-gray-50 placeholder:text-gray-300 dark:placeholder:text-gray-50'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Name'
        />
        <Select
          value={cardsPerPage}
          onChange={(e) => setCardsPerPage(e.target.value)}
          items={[
            { name: "20", value: "20" },
            { name: "50", value: "50" },
            { name: "100", value: "100" },
          ]}
          label='Pokemons per page'
          className='w-1/4'
        />
      </div>
      {currentCards.length > 0 ? (
        <Pokemons pokemons={currentCards} pokemonName={search} />
      ) : (
        <Spinner />
      )}
      <div className='w-full flex items-center justify-center'>
        <Pagination
          totalCards={pokemons.length}
          paginate={paginate}
          cardsPerPage={cardsPerPage}
        />
      </div>
    </div>
  );
};

export default Home;
