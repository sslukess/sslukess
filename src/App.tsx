// Compontents
import { TopBar } from '@/components/top-bar/topBar'
import { Footer } from '@/components/footer/Footer'
import { Outlet } from 'react-router-dom'

// Styles
import './App.css'


function App() {

  return (
    <>
    <TopBar/>

      <Outlet />
    
    <Footer />
    </>
  )
}

export default App
