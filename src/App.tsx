import Otp from "./pages/otp";
import Call from "./pages/call";
import List from "./pages/list";
import Login from "./pages/login";
import Forget from "./pages/forget";
import Signup from "./pages/signup";
import Trades from "./pages/trades";
import Confirm from "./pages/confirm";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/call" element={<Call />} />
      <Route path="/list" element={<List />} />
      <Route path="/" element={<Login />} />
      <Route path="/trads" element={<Trades />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/Confirmpassword" element={<Confirm />} />
    </Routes>
  );
};

export default App;
