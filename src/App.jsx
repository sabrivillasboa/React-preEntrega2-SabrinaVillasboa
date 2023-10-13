import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
//import Terror from "./pages/Terror/Terror";

const App = () => {
  return (
    <Router>
      <header>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </header>
    </Router>
  );
};

export default App;
