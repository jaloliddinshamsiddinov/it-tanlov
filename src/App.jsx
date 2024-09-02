import { NotFound } from './pages'
import { Route, Routes } from 'react-router-dom'
import Form from './components/form'
import { Home } from './pages/home'
import Aos from 'aos';

export default function App() {
  Aos.init();
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
