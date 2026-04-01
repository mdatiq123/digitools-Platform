
import { Suspense } from 'react'
import './App.css'
import DigitalTools from './components/digitalTools/DigitalTools'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Rating from './components/rating/Rating'
import Steps from './components/steps/Steps'
import WorkFlow from './components/workflow/WorkFlow'



const fetchProductCard = async()=>{
  const res = await fetch('/cardJsonData.json')
  return res.json()
}


function App() {
 const productCardPromise = fetchProductCard() 

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <DigitalTools productCardPromise={productCardPromise}></DigitalTools>
      </Suspense>
      <Steps></Steps>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
