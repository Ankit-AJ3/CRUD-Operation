import './App.css';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Update from './components/Update';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<Register/>} ></Route>
        <Route exact path ="/read" element={<Users/>} ></Route>
        <Route exact path ="/update" element={<Update/>} ></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
