import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div className='flex flex-1 flex-col items-center pt-4'>
      <Head>
        <title>About me</title>
        <link
          rel='icon'
          href='https://img.icons8.com/stickers/100/000000/pokeball.png'
        />
      </Head>
      <div className='flex w-4/5 flex-col md:flex-row'>
        <div className='m-4'>
          <Image
            src={`https://avatars.githubusercontent.com/u/82558597?v=4`}
            width='400'
            height='400'
            alt=''
          />
        </div>
        <div className='m-4'>
          <div className='mb-5'>
            <p className='flex items-center gap-2'>
              🇺🇸 Hi!
              <Image
                src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
                width='28'
                height='28'
                alt=''
              />{" "}
              My name is João.
            </p>
            <p>
              Poke-next is a pokedex developed with Next.js and TypeScript by a
              longtime fan of the anime and old franchise games!
            </p>
            <p>
              I hope you liked this project and if you want to see others of my
              projects, access my{" "}
              <a
                className='hover:underline'
                target='_blank'
                href='https://portfolio-jovimoura.vercel.app/'
                rel='noreferrer'
              >
                Portfolio
              </a>{" "}
              or my{" "}
              <a
                className='hover:underline'
                target='_blank'
                href='https://github.com/jovimoura'
                rel='noreferrer'
              >
                Github
              </a>{" "}
              perfil.
            </p>
          </div>
          <div>
            <p className='flex items-center gap-2'>
              🇧🇷 Oi, meu nome é João{" "}
              <Image
                src='https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif'
                width='28'
                height='28'
                alt=''
              />
              .
            </p>
            <p>
              O Poke-next é uma pokedex desenvolvida com Next.js e TypeScript
              por um antigo fã do anime e dos antigos jogos da franquia!
            </p>
            <p>
              Espero que tenham gostado desse projeto e se quiser ver outros
              projetos meus, acesse meu{" "}
              <a
                className='hover:underline'
                target='_blank'
                href='https://portfolio-jovimoura.vercel.app/'
                rel='noreferrer'
              >
                Portfólio
              </a>{" "}
              ou meu perfil do{" "}
              <a
                className='hover:underline'
                href='https://github.com/jovimoura'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              .
            </p>
          </div>
          <div className='flex w-full justify-end mt-4'>
            <span className='text-gray-300'>v2.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
