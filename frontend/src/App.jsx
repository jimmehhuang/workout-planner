import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// import all pages/components
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [addVisibility, setVisible] = useState(false)
  console.log(addVisibility)

  return (
      <div className='bg-gray-200 min-h-screen'>  
        <BrowserRouter>
        {/* pages/components within brower router */}
          <Navbar setNewWorkout={setVisible}/>
          <div className=''>
            <Routes>
              <Route
                path='/'
                element={<Home addVisibility={addVisibility}/>}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
