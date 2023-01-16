import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn  from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      {/* added an component which is present in the all sites like here navigation bar is present in all the pages of our website  */}
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/profile"element ={<Profile/>}/>
        <Route path="/offer" element ={<Offers/>}/>
        <Route path="/sign-in" element ={<SignIn/>}/>
        <Route path="/sign-up" element ={<SignUp/>}/>
        <Route path="/forgot-password" element ={<ForgotPassword/>}/>
        {/* this the naming convention ,most of the people write like this  */}
        {/* the sign-in is the path which we will be showing in the browser search bar  */}
        {/* this is the way of creating pages through route  */}
      </Routes>
    </Router>
  );
}

export default App;
