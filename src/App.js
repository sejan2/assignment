
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/serviceDetails/ServiceDetails';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Register from './Hooks/register/Register';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
