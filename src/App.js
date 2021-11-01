
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail'
import PrivetRoute from './Components/Login/PrivetRoute/PrivetRoute';
import AddService from './Components/AddService/AddService';
import ManageServices from './Components/ManageServices/ManageServices';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000)
  },[])

  return (
    <div className="text-center ">
      {
        loading ?
        <ClimbingBoxLoader color={`#36D7B7`} loading={loading} size={30} />
          :
          <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route  path='/home'>
          <Home></Home>
          </Route>
          <Route  path="/about">
          <About></About>
          </Route>
            <PrivetRoute path="/addservice">
              <AddService></AddService>
            </PrivetRoute>
            <PrivetRoute path='/manageservices'>
              <ManageServices></ManageServices>
            </PrivetRoute>
          <Route  path='/services'>
          <Services></Services>
            </Route>
          <Route path='/login'>
          <Login></Login>
            </Route>
            <PrivetRoute path="/servicedetail/:id">
            <ServiceDetail></ServiceDetail>
          </PrivetRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </AuthProvider>
      }
      
    </div>
  );
}

export default App;
