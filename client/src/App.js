import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
// <<<<<<< HEAD
import Herosection from './components/Herosection';
// =======
import { VideoDashboard } from './components/VideoDashboard';
import { InnerVideo } from './components/InnerVideo';
import { NotesDashboard } from './components/NotesDashboard';
import { InnerNotes } from './components/InnerNotes';
import { McqDashboard } from './components/McqDashboard';
import { InnerMcq } from './components/InnerMcq';
import { ProblemDashboard } from './components/ProblemDashboard';
import { InnerProblem } from './components/InnerProblem';
// >>>>>>> b8bb2dc7a467b6ca0a24f23df9907ff993ed1ed0

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Herosection />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/home' element={<Dashboard />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/videoHome' element={<VideoDashboard />}></Route>
          <Route path='/videoHome/:id' element={<InnerVideo />}></Route>
          <Route path='/enotesHome' element={<NotesDashboard />}></Route>
          <Route path='/enotesHome/:id' element={<InnerNotes />}></Route>
          <Route path='/mcqhome' element={<McqDashboard />}></Route>
          <Route path='/mcqhome/:id' element={<InnerMcq />}></Route>
          <Route path='/problemhome' element={<ProblemDashboard />}></Route>
          <Route path='/problemhome/:id' element={<InnerProblem />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
