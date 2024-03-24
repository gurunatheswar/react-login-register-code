import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom"; 
import {Login} from './login'
import {Signup} from './signup'
import {Homepage} from './homepage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login></Login>} />
            <Route path='/signup' element={<Signup></Signup>} />
            <Route path='/homepage' element={<Homepage></Homepage>} />
            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
