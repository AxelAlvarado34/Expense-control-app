import { useEffect } from 'react'
import { RoutesApp } from './routes/RoutesApp'
import { useExpense } from './hooks/useExpense'

function App() {

  const {state} = useExpense();

  useEffect(()=> {
    localStorage.setItem('budgetInitial', JSON.stringify(state.budget));
    localStorage.setItem('expensesItems', JSON.stringify(state.expenses));
  },[state.expenses, state.budget])

  return (
    <RoutesApp />
  )
}

export default App
