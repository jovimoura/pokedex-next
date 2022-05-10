import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Pokemon.module.css'

export default function Pokemon({ pokemon }) {
  return (
    <div
      className={style.main}
      data-aos="fade-up"
    >
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3 style={{ marginTop: '1rem' }}>N°{pokemon.id}</h3>
      <Link href={`pokemon/${pokemon.id}`}>
        <a className={style.link}>{pokemon.name}</a>
      </Link>
    </div>
  )
}
