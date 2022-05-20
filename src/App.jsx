
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import LoginPage from "./pages/LoginPage"


export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
 )
} 