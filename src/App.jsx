import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Header } from './containers/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Student } from './pages/Student'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/estudiantes' element={<Student />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
