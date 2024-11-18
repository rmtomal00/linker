import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './routes/Layout';
import Home from './routes/Home';
import About from './routes/About'
import Contact from './routes/Contact'
import Price from './routes/Price'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard';
import NotFound from './routes/NotFound';
import AuthProvider from './Context/AuthContext';
import History from './routes/History';
function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<Layout/>}>
                <Route index element = {<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/price' element={<Price/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/history' element={<History/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
