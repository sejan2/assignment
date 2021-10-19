
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AllContact from './components/AllContact/AllContact';

import DetailBlogs from './components/DetailBlogs/DetailBlogs';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
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
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/blogs">
              <DetailBlogs></DetailBlogs>
            </PrivateRoute>
            <Route exact path="/contact">
              <AllContact></AllContact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
