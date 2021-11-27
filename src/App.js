import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import HiredPhotographer from './pages/Dashboard/User/HiredPhotographer/HiredPhotographer';
import Review from './pages/Dashboard/User/Review/Review';
import ManageHired from './pages/Dashboard/User/ManageHired/ManageHired';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/gallery' element={
              <PrivateRoute>
                <Images></Images>
              </PrivateRoute>
            }/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='dashboard' element={<Dashboard/>}>
              <Route path='hired' element={<HiredPhotographer/>}/>
              <Route path='manageHired' element={<ManageHired/>}/>
              <Route path='review' element={<Review/>}/>
            </Route>
            <Route  path='*' element={<NotFound/>}/>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
