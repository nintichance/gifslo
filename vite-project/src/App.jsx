import './App.css'
import GifBag from './components/GifBag'
import GifCarousel from './components/GifCarousel'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<GifBag/>}/>
          <Route path="/carousel" element={<GifCarousel/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
