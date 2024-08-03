import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {
    let [person, setPerson] = useState({})
    let isLoggedIn = useSelector(store=>store.userInfoStore.isLoggedIn)
    let dispatch= useDispatch()
    let navigate = useNavigate()

    const handleChange = e =>{
        setPerson({...person, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        dispatch({type: "LOGIN", payload: person.email})
        redirect()
    }
    useEffect(() =>{
        if(isLoggedIn){
            return navigate('/')
        }
    },[isLoggedIn,navigate])


  return (
    <>
    {/* {redirect()} */}
    <div className='border  rounded-md p-10 m-10 bg-slate-200'>
    <div>Login</div>
    <form className='flex flex-col '>
        <label htmlFor="Email" className=''>Email: <input className='border border-black rounded-md' type="email" id='email' name="email" onChange={handleChange}/></label>
        
        <label htmlFor="password">Password: <input className="border border-black rounded-md" type="password" id='pwd' name="password" onChange={handleChange} /></label>
        
        <button className="text-md  text-white bg-stone-900 border rounded-md px-32 py-1 mt-3" onClick={handleSubmit}>Login</button>
    </form>
    </div>
    </>
  )
}

export default Login