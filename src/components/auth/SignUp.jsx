import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.js'
import "./signup.css"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }

  return (
    <div className='sign-up-container'>
        <form onSubmit={signUp}>
            <h1>Zarejestruj się</h1>
            <input
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input 
                type='password'
                placeholder='Hasło'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type='submit' className='button'>Zarejestruj się</button>
        </form>

    </div>
  )
}

export default SignUp