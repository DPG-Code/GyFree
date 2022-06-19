import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home';
import ListOfGifs from './components/ListOfGifs'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
    <StaticContext.Provider value={{name : 'Daniel Prieto', suscribe : true}}>
      <div className="App">
        <Link to="/">Home</Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={ListOfGifs} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  );
}

export default App;