import Otp from "./pages/otp"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Forget from "./pages/forget"
import Confirm from "./pages/confirm"
import { Route, Routes } from "react-router-dom"
import Trades from "./pages/trades"
import Call from "./pages/call"
import List from "./pages/list"





const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Signup/>}/>
      <Route path="/forget" element={<Forget/>}/>
      <Route path="/otp" element={<Otp/>}/>
      <Route path="/Confirmpassword" element={<Confirm/>}/>
      <Route path="/trads" element={<Trades/>}/>
      <Route path="/call" element={<Call/>}/>
      <Route path="/list" element={<List/>}/>
    </Routes>
  )
}

export default App
