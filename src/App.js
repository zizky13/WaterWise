import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

import LandingPage from './pages/landingPage';
import Guide from './pages/guide';
import About from './pages/about';
import NavBar from './pages/navBar';

import SideTabs from './pages/mainMenus/sideTabs';
// import Dashboard from './pages/mainMenus/dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signUp' element={
          <main>
            <SignUp />
          </main>
        }/>
        <Route path='/signIn' element={
          <main>
            <SignIn />
          </main>
        }/>
        <Route path='/sidetabs' element={<SideTabs />}/>
        <Route path='/*' element={
          <main>
            <NavBar />
            <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/about' element={<About />}/>
              <Route path='/guide' element={<Guide />}/>
              
            </Routes>
          </main>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;