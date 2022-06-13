import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home';
import ListOfGifs from './components/ListOfGifs'


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={ListOfGifs} />
    </div>
  );
}

export default App;