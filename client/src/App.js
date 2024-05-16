import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { VideoDashboard } from './components/VideoDashboard';
import { InnerVideo } from './components/InnerVideo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/home' element={<Dashboard />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/videoHome' element={<VideoDashboard />}></Route>
          <Route path='/videoHome/:id' element={<InnerVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
