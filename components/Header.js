import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()
  return (
    <>
      <header
        style={{
          boxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          WebkitBoxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          MozBoxShadow: '4px 0px 17px -5px rgba(0,0,0,0.75)',
          display: 'flex',
          flexBasis: 'auto',
          background: 'rgb(194,12,12)',
          background:
            'linear-gradient(90deg, rgba(194,12,12,1) 0%, rgba(255,0,0,1) 54%, rgba(142,0,0,1) 100%)',
          width: '100%'
        }}
      >
        <nav
          style={{
            textAlign: 'center',
            width: '100%',
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <ul style={{ display: 'flex' }}>
            <li style={{ margin: '1rem' }}>
              <svg
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="currentColor"
                className={
                  router.pathname === '/' ? style.activeSvg : style.svg
                }
              >
                <path
                  d={
                    'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C7.92,4 4.55,7.05 4.06,11H8.13C8.57,9.27 10.14,8 12,8C13.86,8 15.43,9.27 15.87,11H19.94C19.45,7.05 16.08,4 12,4M12,20C16.08,20 19.45,16.95 19.94,13H15.87C15.43,14.73 13.86,16 12,16C10.14,16 8.57,14.73 8.13,13H4.06C4.55,16.95 7.92,20 12,20M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z'
                  }
                />
              </svg>
              <Link href="/">
                <a
                className={router.pathname == '/' ? style.active : style.link}
                >
                  Home
                </a>
              </Link>
            </li>
            <li style={{ margin: '1rem' }}>
              <svg
                width={17}
                height={17}
                viewBox="0 0 24 24"
                fill="currentColor"
                className={
                  router.pathname == '/about' ? style.activeSvg : style.svg
                }
              >
                <path
                  d={
                    'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C7.92,4 4.55,7.05 4.06,11H8.13C8.57,9.27 10.14,8 12,8C13.86,8 15.43,9.27 15.87,11H19.94C19.45,7.05 16.08,4 12,4M12,20C16.08,20 19.45,16.95 19.94,13H15.87C15.43,14.73 13.86,16 12,16C10.14,16 8.57,14.73 8.13,13H4.06C4.55,16.95 7.92,20 12,20M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z'
                  }
                />
              </svg>
              <Link href="/about">
                <a
                className={
                  router.pathname == '/about' ? style.active : style.link
                }
                >
                  About
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}