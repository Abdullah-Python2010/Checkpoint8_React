import './App.css';
import { Nav } from './components/Navbar'
import { Movies } from './components/MovieList'
import { Form } from './components/addMovie'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Form/>
      <Movies/>
    </div>
  );
}

export default App;
