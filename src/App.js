import './App.css';
import { Nav } from './components/Navbar'
import { Movies } from './components/MovieList'
import { Form } from './components/addMovie'
import { Router, Routes, Route } from 'react-router-dom'
import { page } from './components/moviePage';

function App() {
  return (
    <div className="App">
      
        <Nav/>
        <Routes>
          <Route path='/' element={<Movies />}></Route>
          <Route path='/movie' element={<page/>}></Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
