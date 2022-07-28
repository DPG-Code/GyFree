import React, {Suspense} from "react";
import { Link, Route } from "wouter";
import SearchResults from 'components/SearchResults';
import Detail from './pages/Detail'
import Error from "pages/Error";
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={{name : 'Daniel Prieto', suscribe : true}}>
      <Suspense fallback={null}>
        <div className="App">
          <Link className='home' to="/">Home</Link>
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={Error} />
          </GifsContextProvider>
        </div>
      </Suspense>
    </StaticContext.Provider>
  );
}

export default App;