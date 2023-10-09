import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import Terror from "./pages/Terror/Terror";

const App = () => {
  return (
    <Router>
      <header>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido!"/>}/>
          <Route path="/terror" element={<Terror/>}/>
        </Routes>
      </header>
    </Router>
  );
};

export default App;
