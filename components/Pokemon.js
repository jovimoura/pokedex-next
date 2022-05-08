import Image from "next/image";
import Link from "next/link";
import style from '../styles/Pokemon.module.css'

export default function Pokemon({ pokemon }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #fff', borderRadius: '15px' ,margin: '1rem', width: '10rem', padding: '1rem',boxShadow: 'rgb(0 0 0 / 30%) 0px 3px 5px' }}>
      <Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width='120'
        height='120'
        alt={pokemon.name}
      />
      <Link href={`pokemon/${pokemon.id}`}>
        <a className={style.link}>{pokemon.name}</a>
      </Link>
    </div>
  )
}