import { ReactLenis } from "lenis/react"
import gsap from "gsap";
import { useRef, useEffect } from "react"
import {Navbar} from "./Components"
import  Home  from "./Pages/Home";

function App() {
   const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  return (
    <>
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        <Navbar />
        <Home />
    </>
  )
}

export default App
