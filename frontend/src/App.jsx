import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import all pages/components
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
      <div className=''>  
        <BrowserRouter>
        {/* pages/components within brower router */}
          <Navbar/>
          <div className=''>
            <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
