import Head from "next/head";
import Image from "next/image";

const AboutPage = ({ avatar }) => {
  return (
    <div style={{ display: "flex", marginLeft: "10rem", marginTop: "4rem", padding: '2rem' }}>
      <Head>
        <title>About</title>
      </Head>
      <div className="image">
        <Image src="/images/foto-de-perfil.png" width="220px" height="300px" />
      </div>
      <div className="text" style={{ padding: "2rem" }}>
        <div className="eng">
          <p className="br">
            🇺🇸 Hi!
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="28px"
              height="28px"
            ></img>{" "}
            My name is João.
          </p>
          <p>
            Next-poke is a pokedex developed with Next.js and JavaScript by a
            longtime fan of the anime and old franchise games!
          </p>
          <p>
          I hope you liked this project and if you want to see others
            my projects, access my{" "}
            <a href="jovimoura.github.io/portfolio/">Portfolio</a> or my 
            {' '}<a href="https://github.com/jovimoura">Github</a> perfil.
          </p>
        </div>
        <div className="pt">
          <p className="br">
            🇧🇷 Oi, meu nome é João{" "}
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
            projetos meus, acesse meu{" "}
            <a href="jovimoura.github.io/portfolio/">Portfólio</a> ou meu perfil
            do <a href="https://github.com/jovimoura">Github</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}

export default AboutPage;
