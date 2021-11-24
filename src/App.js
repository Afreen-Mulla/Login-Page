import './App.css';
import Login from './loginPage';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route exact path="/Home" element={<Home/>}/>
    <Route exact path="/" element={<Login/>}/>
</Routes>
   
    </BrowserRouter>
    </>
  );
}

export default App;
