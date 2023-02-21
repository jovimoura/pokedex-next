import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export const Pokemon = ({ pokemon }: any) => {
  const refToComponent = useRef(null);

  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(refToComponent.current);
      }
    }
    animate();
  }, []);

  return (
    <div
      ref={refToComponent}
      className={`
        p-5 dark:bg-gray-400 m-4 flex flex-col justify-center
        items-center border-b-2 border-red-600 dark:border-2 dark:border-transparent 
        dark:hover:border-zinc-400 transition-colors
      `}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        width='120'
        height='120'
        alt={pokemon.name}
      />
      <h3>N° {pokemon.id}</h3>
      <Link
        href={`pokemon/${pokemon.id}`}
        className='capitalize my-1 hover:underline'
      >
        {pokemon.name}
      </Link>
    </div>
  );
};
