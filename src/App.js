import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Images from './pages/Images/Images';
import Services from './pages/Service/Services/Services';
import Footer from './pages/Footer/components/Footer/Footer'
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Register from './pages/Registration/components/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/gallery'>
              <Images></Images>
            </PrivateRoute>
            <Route exact path='/service'>
              <Services></Services>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route  path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
