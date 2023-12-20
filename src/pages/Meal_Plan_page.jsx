import React from 'react'
import { AuthProvider } from '../components/AuthContext'
import AuthDetails from '../components/AuthDetails'
import Meal_plan from '../components/Meal_plan/Meal_plan'
import { useAuth } from '../components/AuthContext'

const Meal_Plan_page = () => {
    const { authUser } = useAuth();

    if (!authUser) {
        return null; // Nie wyświetlaj nic dla niezalogowanego użytkownika
    }
  return (
    <AuthProvider>
        <AuthDetails/>
        <Meal_plan/>
    </AuthProvider>
  )
}

export default Meal_Plan_page