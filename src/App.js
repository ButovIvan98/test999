import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<h1>Invoice0999 </h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
