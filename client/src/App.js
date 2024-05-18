import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
<<<<<<< HEAD
import Herosection from './components/Herosection';
=======
import { VideoDashboard } from './components/VideoDashboard';
import { InnerVideo } from './components/InnerVideo';
>>>>>>> b8bb2dc7a467b6ca0a24f23df9907ff993ed1ed0

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Herosection />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
<<<<<<< HEAD
          <Route path='/dashboard' element={<Dashboard />}></Route>
=======
          <Route path='/home' element={<Dashboard />}></Route>
>>>>>>> b8bb2dc7a467b6ca0a24f23df9907ff993ed1ed0
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/videoHome' element={<VideoDashboard />}></Route>
          <Route path='/videoHome/:id' element={<InnerVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
