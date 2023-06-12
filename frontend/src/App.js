import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import CreateRecipe from './Pages/Create.-recipe';
import SavedRecipe from './Pages/Saved-recipe';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Auth/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />
          <Route path="/saved-recipe" element={<SavedRecipe/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
