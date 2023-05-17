import React, {useState} from 'react'
import './signup.scss'
import {createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebas';
import FormInput from '../formInput/FormInput';
import Button from '../Button/Button';


const defaultFormField ={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}



const SignUpform = () => {
const [formField,setFormField] =useState(defaultFormField);
const {displayName,email,password,confirmPassword} =formField;




// console.log(formField); 

const resetFormField =() =>{
    setFormField(defaultFormField);
}


const handleSubmit=async (event)=>{
    event.preventDefault();

    if(password !== confirmPassword ){
        alert('password not match');
        return;
    }

    try {
        const {user} = await createAuthUserWithEmailAndPassword(
            email,
            password
            );
  
await createUserDocumentFromAuth(user,{displayName});
resetFormField();
      
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('cant create user, eamil exists')
      }
        console.log('user creation error',error) ;
    }
}



const handleChange =(event) =>{
const {name,value} =event.target;

setFormField({ ...formField,[name]:value})

};


  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpform