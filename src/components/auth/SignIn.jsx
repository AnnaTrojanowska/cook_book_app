import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.js'
import { Link, useNavigate } from 'react-router-dom';
import "./signin.css"
import { useAuth } from '../AuthContext.jsx';

const SignIn = () => {
    const { authUser } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (authUser) {
            navigate('/'); 
        }
    }, [authUser, navigate]);

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    }

  return (
    <div className='sign-in-container'>
        <form onSubmit={signIn}>
            <h1>Zaloguj się</h1>
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
            <button type='submit' className='button'>Zaloguj się</button>
            <p>Nie masz konta? <Link to={'/signup'}>Zarejestruj się!</Link></p>
        </form>

    </div>
  )
}

export default SignIn