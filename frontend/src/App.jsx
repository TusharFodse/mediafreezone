import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import { UserData } from "./context/UserContext";
import Navbar from "./compents/Navbar";

import PinPage from "./pages/PinPage";
import Create from "./pages/Create";
import Account from "./pages/Account";
import UserProfile from "./pages/UserProfile";
import TermsAndConditions from "./pages/TermsAndConditions";

const App =()=> {
  const {loading,isAuth,user}= UserData();
 


  return (
    
    <>
   
    
    
 
      <BrowserRouter>
      {isAuth && <Navbar user={user}/>}
        <Routes>
          <Route path="/" element={isAuth ? <Home />: <Login />} />
          <Route path="/account" element={isAuth ? <Account user={user} />: <Login />} />
          <Route path="/user/:id" element={isAuth ? <UserProfile user={user} />: <Login />} />

          
          <Route path="/create" element={isAuth ? <Create />: <Login />} />
          <Route path="/pin/:id" element={isAuth ? <PinPage user= {user} />: <Login />} />

          {/* <Route path="/create" element={isAuth ? <Create/>: <Login />} /> */}
          <Route path="/login" element={isAuth ? <Home />: <Login />} />
          <Route path="/register" element={isAuth ? <Home />: <Register />} />

          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          
        </Routes>
      </BrowserRouter>



    </>
    
  )
}

export default App
