import "./App.css";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div id="App">
      <Routes>  
        <Route path="/*" element={<MainPage/>} />
        <Route path="/About/:id" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
