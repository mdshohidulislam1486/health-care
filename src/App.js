import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
               <Login></Login>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
