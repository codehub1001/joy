import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Messages from './pages/Messages'
import Gallery from './pages/Gallery'



const App = () => {
  return (
    <div>

      <Header/>
      <Banner/>
      <Messages/>
      <Gallery/>
    </div>
  )
}

export default App