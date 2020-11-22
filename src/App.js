import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import Header from '../src/components/Header';
import Watchlist from '../src/components/Watclist';
import Add from '../src/components/Add';
import Watched from '../src/components/Watched';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
// fontawesome
import './lib/font-awesome/css/all.min.css';
// Provider
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={ Watchlist }/>
          <Route path='/add' component={ Add } />
          <Route path='/watched' component={ Watched }/>
          <Route path='/:id' component={ MovieDetails }/>
        </Switch>
      <Footer />
      </Router>
    </GlobalProvider>
    </div>
  );
}

export default App;
