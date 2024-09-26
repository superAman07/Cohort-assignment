import './App.css'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const  Landing = lazy(()=>import('./components/Landing'))
const  Dashboard = lazy(()=>import('./components/Dashboard'))
function App() {
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
          <Routes>
              <Route path='/dashboard' element={<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>
              <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        navigate('/');
      }}>Home</button>
      <button onClick={()=>{
        navigate('/dashboard');
      }}>Dashboard</button>
    </div>
  )
}

export default App
