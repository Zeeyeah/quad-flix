import './App.css';
import HomePage from './componets/HomePage';
import { Route, Routes } from "react-router-dom"
import Show from './pages/Show';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/show/:id' element={<Show />} />
    </Routes>
  );
}

export default App;
