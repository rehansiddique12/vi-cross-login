import Otp from "./pages/otp"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Forget from "./pages/forget"
import Confirm from "./pages/confirm"
import { Route, Routes } from "react-router-dom"



const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forget" element={<Forget/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="/Confirmpassword" element={<Confirm/>}/>
    </Routes>
  )
}

export default App
