import './App.css';
import Login from './loginPage';
import Home from './Home';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
<Login />
<Home/>
    {/* <BrowserRouter>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route exact path="/Login" element={<Login/>}/>
</Routes>
   
    </BrowserRouter> */}
    </>
  );
}

export default App;
