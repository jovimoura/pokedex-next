import Link from "next/link";
import { use100vh } from 'react-div-100vh'

export default function Navbar() {
  const height = use100vh()
  return (
    <>
      <aside
        style={{
          boxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          WebkitBoxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          MozBoxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          display: "flex",
          flexBasis: "auto",
          background: "rgb(255,0,0)",
          background:
            "linear-gradient(to top, rgba(255,0,0,1) 0%, rgba(194,12,12,1) 50%, rgba(142,0,0,1) 100%)",
          height: height,
          position: 'fixed'
        }}
      >
        <nav style={{ textAlign: "center", width: "100%", paddingTop: '1rem' }}>
          <div>
            <img
              src="/images/pokeIco.png"
              style={{ width: "150px", height: "90px" }}
              alt=""
            />
          </div>
          <ul>
            <li style={{ margin: '1rem 0' }}>
              <Link href='/'>
                <a style={{ fontSize: "1.5rem", textDecoration: 'none', fontWeight: 600, color: '#FFF' }}>Home</a>
              </Link>
            </li>
            <li style={{ margin: '1rem 0' }}>
              <Link href="/about">
                <a style={{ fontSize: "1.5rem", textDecoration: 'none', fontWeight: 600, color: '#FFF' }}>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
