import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Watchlist from './pages/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/watchlist" element={<Watchlist />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route path="/login" element={<LoginPage />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
