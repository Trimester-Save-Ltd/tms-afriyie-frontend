
import NotFound from 'components/NoPage';
import Auth from 'pages/Auth';
import ForgotPassword from 'pages/Auth/ForgetPassword';
import Login from 'pages/Auth/Login';
import Register from 'pages/Auth/Register';
import ResetPassword from 'pages/Auth/ResetPassword';
import Budget from 'pages/Dashboard/Budget';
import Dashboard from 'pages/Dashboard';
import Metrics from 'pages/Dashboard/Metrics';
import Report from 'pages/Dashboard/Report';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from 'pages/Auth/Verify';
import Settings from 'pages/Dashboard/Settings';


const App = () => {
  return (
    <div className="App relative">
      <BrowserRouter>
      <Routes>
        <Route element={<Auth />} >
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot_password' element={<ForgotPassword />} />
          <Route path='/reset_password' element={<ResetPassword />} /> 
          <Route path='/verify' element={<Verify />} /> 
        </Route>
        <Route path='dashboard' element={<Dashboard />} >
          <Route index element={<Metrics />}/>
          <Route path='report' element={<Report />}/>
          <Route path='budget' element={<Budget />}/>
          <Route path='settings' element={<Settings />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
