import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Banner from './pages/Home/Banner/Banner';

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Banner></Banner>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
