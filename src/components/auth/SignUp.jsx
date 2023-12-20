import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.js'
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.jsx';



const SignUp = () => {
    const { authUser } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (authUser) {
            navigate('/'); 
        }
    }, [authUser, navigate]);

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