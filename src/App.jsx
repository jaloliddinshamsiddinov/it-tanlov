import { NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import Form from './components/form'
import { Home } from './pages/home'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ishtirok-etish' element={<Form />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
