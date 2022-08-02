import React, {Suspense} from "react";
import { Link, Route } from "wouter";

import SearchResults from 'components/SearchResults';
import Header from "components/Header";
import Detail from 'pages/Detail'
import Error from "pages/Error";
import LoginPage from "pages/Login";
import RegisterPage from "pages/Register";

import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from 'context/GifsContext';

import './App.css';

const HomePage = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <UserContextProvider>
      <Suspense fallback={null}>
        <div className="App">
          <Header />
          <Link className='home' to="/">Home</Link>
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={Error} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </GifsContextProvider>
        </div>
      </Suspense>
    </UserContextProvider>
  );
}

export default App;