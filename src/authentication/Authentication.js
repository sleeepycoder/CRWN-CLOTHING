import React from 'react'
import SignIn from '../SignIn/SignIn'
import SignUpform from '../components/signup/SignUpform'
import './auth.scss'




const Authentication = () => {
  return (
   
    <div className='authentication-container'>
   <SignIn/>
    <SignUpform/>

  </div>
  )
}

export default Authentication