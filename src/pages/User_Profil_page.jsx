import React from 'react'
import Contact from '../components/Contact/Contact'
import { Link } from 'react-router-dom'

const User_Profil_page = () => {
  return (<>
  <div className='user-page-container'>
   
        <h1>WITAJ!</h1>
    <div className='text'>
        <h3>Cieszymy się, że jesteś z nami</h3>
        <p>Nasz serwis oferuje generowanie planu posiłków dla zalogowanych użytkowników - <Link to={'/mealplan'}>SPRAWDŹ</Link></p>
        <p>Nie wiesz jak korzystać z serwisu? - <Link to={'/help'}>ZOBACZ</Link></p>

    </div>
  </div>
    <Contact/>
    </>
  )
}

export default User_Profil_page