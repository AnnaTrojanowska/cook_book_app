import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const AuthDetails = () => {
const { authUser } = useAuth();

const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('sign out successful');
    }).catch(error => console.log(error));
};

if (!authUser) {
    // return <p>Signed Out</p>;
}

return (
    <>
        {/* <p>{`Zalogowany jako ${authUser.email}`}</p> */}
        <Link to={'/'}><button onClick={userSignOut} className='signOutButton'>WYLOGUJ</button></Link>
    </>
);
};

export default AuthDetails