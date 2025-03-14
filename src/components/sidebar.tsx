
import logo from "../assets/img/whitelogo.png"
import { FiBox } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="bg-white h-screen">
        
            <div className="">
              <div className="">
                <div className="bg-Blue h-screen  ">
                    <div className="mx-4 flex flex-col justify-center items-center pt-16">
                    <img src={logo} alt="" className="h-20  "/>
                    <Link to= "/trads" className="w-full bg-White p-4 rounded-lg flex r items-center gap-2 mt-10 text-Blue hover:bg-Blue hover:text-White border-2 border-White" >
                    <CiGrid41  className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Trade Booths</p>
                    </Link>

                    <Link to="/call" className="w-full bg-White p-4 rounded-lg flex r items-center gap-2 mt-5 text-Blue hover:bg-Blue hover:text-White border-2 border-White" >
                    <IoChatboxEllipsesOutline  className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Support</p>
                    </Link>
                    <button className="w-full bg-White  text-Blue hover:bg-Blue hover:text-White  p-4 rounded-lg flex  items-center gap-2 mt-5 mx-8 hover:border-2" >
                    <FiBox className="size-7 "/>
                        <p className="font-bold font-myFont text-lg ">Trade Booths List</p>
                    </button>

                    
                    </div>
                </div>
              </div>
            </div>
        
        
    </div>
  )
}

export default Sidebar