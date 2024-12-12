import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BudgetPage } from '../components/BudgetPage/BudgetPage'
import { DashBoard } from '../components/DashBoard/DashBoard'

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BudgetPage />} />
        <Route path='/Home' element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}
