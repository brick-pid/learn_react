import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Visulization from "./pages/Visulization"

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        App component
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/visulization" element={<Visulization />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}



export default App