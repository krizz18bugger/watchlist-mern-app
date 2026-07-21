import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import Watchlist from './pages/Watchlist.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/watchlist" element={<Watchlist />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path={'/'} element={<LoginPage />} />
      <Route path={'/login'} element={<LoginPage />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
