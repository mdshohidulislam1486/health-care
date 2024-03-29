import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import OurSpecialists from './pages/OurSpecialists/OurSpecialists';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';

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
            <Route path='/specialist'>
              <OurSpecialists></OurSpecialists>
            </Route>
            <Route path='/login'>
               <Login></Login>
            </Route>
            <PrivateRoute exact path='/serviceDetails/:key'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
