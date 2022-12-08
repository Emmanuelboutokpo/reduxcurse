import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
import Header from './components/Header';

function App() {
  return (
    <>
       <Header />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/single/:id" element={<SingleCocktail/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </> 
  );
}

export default App;
