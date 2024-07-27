import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import LandingPage from './pages/landingPage';
import Guide from './pages/guide';
import About from './pages/about';
import Home from './pages/home';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signUp' element={<SignUp />}/>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/guide' element={<Guide />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;