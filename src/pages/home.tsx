import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-center mb-10">Home</p>
        <div className="flex gap-3">
        <Link to="/signup" className="bg-Blue text-White p-2 rounded-lg gap-3">Signup</Link>
        <Link to="/login" className="bg-Blue text-White p-2 rounded-lg px-4">Login</Link>
        <Link to="/trads" className="bg-Blue text-White p-2 rounded-lg px-4">DashBoard</Link>
    </div>
    </div>
    
    
  )
}

export default Home