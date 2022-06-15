import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from './Components/Admin/Admin/Admin';
import AddService from './Components/Admin/AddService/AddService';
import Book from './Components/Dashboard/Book/Book';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/Login/PrivateRoute/PrivateRoute';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import OrderList from './Components/Admin/OrderList/OrderList';
import Review from './Components/Dashboard/Review/Review';
import ManageService from './Components/Admin/ManageService/ManageService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import Navbar from './Components/Home/Navbar/Navbar';


export const userContex = createContext();
function App() {
  const [logedInUser, setLogedInUser] = useState({})
  const [selectedService, setSelectedService] = useState({})
  return (
    <div className="App">
      
      <userContex.Provider value={{login:[logedInUser, setLogedInUser],selected: [selectedService, setSelectedService]}}>
          
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<PrivateRoute><OrderList /></PrivateRoute>} />
        <Route path='/admin/manageService' element={<PrivateRoute><ManageService /></PrivateRoute>} />
        <Route path='/admin/makeAdmin' element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
        <Route path='/admin/orderlist' element={<PrivateRoute><OrderList /></PrivateRoute>} />
        <Route path='/admin/addservice' element={<PrivateRoute><AddService /></PrivateRoute>} />
        <Route path='/dashboard/book' element={<PrivateRoute><Book/></PrivateRoute>} />
        <Route path='/dashboard/review' element={<PrivateRoute><Review/></PrivateRoute>} />
        <Route path='/dashboard/booking' element={<PrivateRoute><BookingList /></PrivateRoute>} />
      </Routes>
      </BrowserRouter>
      </userContex.Provider>
    </div>
  );
}

export default App;
