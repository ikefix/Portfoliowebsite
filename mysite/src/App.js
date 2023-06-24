import React from 'react'
import { About,Contact,Experience,Header,Nav,Testimonias, Services, Portfolio} from './component'
import './index.css'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonias/>
    <Contact/>
    
    </>
  )
}

export default App;