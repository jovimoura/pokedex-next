import Head from 'next/head'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import style from '../styles/About.module.css'

const AboutPage = () => {
  
  useEffect(
    () => AOS.init({ duration: 1000 }),
    []
  )

  return (
    <div
      data-aos="fade-up"
      className={style.main}
    >
      <Head>
        <title>About</title>
        <link rel="shortcut icon" href="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-pokeball-video-games-those-icons-lineal-color-those-icons.png" type="image/x-icon" />
      </Head>
      <div className={style.image}>
        <Image src="/images/foto-de-perfil.png" width="220px" height="300px" />
      </div>
      <div className={style.text}>
        <div className="eng">
          <p className="br">
            🇺🇸 Hi!
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="28px"
              height="28px"
            ></img>{' '}
            My name is João.
          </p>
          <p>
            Next-poke is a pokedex developed with Next.js and JavaScript by a
            longtime fan of the anime and old franchise games!
          </p>
          <p>
            I hope you liked this project and if you want to see others of my
            projects, access my{' '}
              <a target='_blank' href="https://jovimoura.github.io/portfolio/">Portfolio</a> {' '}
 
            or my{' '}
              <a target='_blank' href="https://portfolio-jovimoura.vercel.app/">Github</a>
            {' '}perfil.
          </p>
        </div>
        <div className="pt">
          <p className="br">
            🇧🇷 Oi, meu nome é João{' '}
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="28px"
              height="28px"
            ></img>
            .
          </p>
          <p>
            O Next-poke é uma pokedex desenvolvida com Next.js e JavaScript por
            um antigo fã do anime e dos antigos jogos da franquia!
          </p>
          <p>
            Espero que tenham gostado desse projeto e se quiser ver outros
            projetos meus, acesse meu{' '}
            <a target="_blank" href="https://portfolio-jovimoura.vercel.app/">Portfólio</a> ou meu perfil
            do{' '}
            <a href="https://github.com/jovimoura" target="_blank">
              Github
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  await new Promise(resolve => {
    setTimeout(resolve, 500)
  })
  return { props: {} }
}

export default AboutPage
