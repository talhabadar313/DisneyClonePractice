
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Details";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Welcome}/>
         
        <Route path="/home" Component={Home}/>
          
        <Route path="/detail/:id" Component={Detail}/>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
