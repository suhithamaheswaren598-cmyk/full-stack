import Counter from "./components/Counter"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Parent from "./pages/Parent"
import Services from "./pages/Services"

const App = ()=>{
  return (
    <div>
      <Navbar />
      <h1>hello world!!</h1>
      <h1>hello world!!</h1>
      <Home />
      <Contact />
      <Services />
      <About />
      <Parent />
      <Counter />
    </div>
    
  )
}

export default App