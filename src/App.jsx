import { ClientQuery, ClientQueryProvider} from 'react-query';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePages';
import LoginPage from "./pages/LoginPage"

const clientQuery = new ClientQuery({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
function App() {
  return(
    <ClientQueryProvider client={clientQuery}>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
    </ClientQueryProvider>
 )

} 
export default App