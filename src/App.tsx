import { useEffect } from 'react'
import { RoutesApp } from './routes/RoutesApp'
import { useExpense } from './hooks/useExpense'

function App() {

  const { state, dispatch } = useExpense();

  useEffect(() => { 
      const handlePopState = () => { 
        if (window.location.pathname === '/' && state.budget > 0) { 
          dispatch({ type: 'reset-app' });  
        } }; 
        window.addEventListener('popstate', handlePopState); 
        return () => { window.removeEventListener('popstate', handlePopState);}; 
  }, [state.budget, dispatch]);

  useEffect(() => {
    localStorage.setItem('budgetInitial', JSON.stringify(state.budget));
    localStorage.setItem('expensesItems', JSON.stringify(state.expenses));
  }, [state.expenses, state.budget])
  return (
    <RoutesApp />
  )
}

export default App
