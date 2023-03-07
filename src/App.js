import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Article from './components/Article'
import Homepage from './components/Homepage'
import About from './components/About'


function App () {
  return (
    // 最外层的BrowserRouter组件，用来包裹整个应用，这样整个应用就可以使用路由了
    <BrowserRouter>
      {/* Link组件用来建立 [a链接->路径] 的映射 */}
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>

      {/* Routes组件用来建立 [路径->组件] 的映射 */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />}>
          <Route path='article' element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



export default App