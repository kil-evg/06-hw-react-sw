import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import { navItems } from './utils/constants'
import { SWContext } from './utils/context'

function App() {
  const [page, setPage] = useState(navItems[0])

  return (
    <div className='container-fluid'>
      <SWContext.Provider value={{
        page, setPage
      }}>
        <Header />
        <Main />
        <Footer />
      </SWContext.Provider>
    </div>

  )
}

export default App
