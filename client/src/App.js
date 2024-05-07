import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import { Home } from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
