import Navbar from './Navbar'

export default function MainContainer({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar/>
      { children }
    </div>
  )
}