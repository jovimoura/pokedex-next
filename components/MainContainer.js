import Navbar from './Navbar'
import Header from './Header'
import style from '../styles/MainContainer.module.css'

export default function MainContainer({ children }) {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.header}>
        <Header />
      </div>
      {children}
    </div>
  )
}
