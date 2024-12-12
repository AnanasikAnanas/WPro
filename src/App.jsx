import './App.css'
import Fuq from './components/FUQ/Fuq'
import Gif from './components/Gif/Gif'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Offer from './components/Offer/Offer'
import './index.css'

function App() {
  return (
    <div className=' flex flex-col gap-14'>
      <Header/>
      <Home/>
      <Gif/>
      <Offer/>
      <Fuq/>
    </div>
  )
}

export default App
