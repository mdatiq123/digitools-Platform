
import './App.css'
import DigitalTools from './components/digitalTools/DigitalTools'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'
import Steps from './components/steps/Steps'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <DigitalTools></DigitalTools>
      <Steps></Steps>
    </>
  )
}

export default App
