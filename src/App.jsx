import { useEffect, useState } from 'react'
// import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './Appwrite/auth'
import {login,logout} from './Store/authSlice'
import { Footer, Header } from './compnents'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading?(
    <div className='min-h-screen flex flex-col justify-between '>
      {/* <div className='w-full block'> */}
      <Header/>
      <main>
       <Outlet/>
      </main>
      {/* </div> */}
    {/* <div className='w-full mx-auto'> */}
      <Footer/>
    </div>
    // </div>
  ) 
  : null 
}

export default App
