import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
// import all pages/components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Moment from 'react-moment'

function App() {
  const [addVisibility, setVisible] = useState(false)
  console.log(addVisibility)

  return (
      <div className='bg-gray-200 min-h-screen'>  
        <BrowserRouter>
        {/* pages/components within brower router */}
          <Navbar setNewWorkout={setVisible}/>
          <div className=''>
            <div className='m-4 text-center text-2xl font-semibold'>
              <h1 className=''>
                Hello, today is  <Moment format="MMMM Do YYYY"/>.
              </h1>
              <h2 className='text-xl'>
                It's time to lift!
              </h2> 
            </div>
            
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
