import { sidebar } from "../lib/constants";
import logo from "../assets/img/whitelogo.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const location = useLocation();
  return (
    <div className="bg-white h-screen">
      <div className="">
        <div className="">
          {isOpen ? (
            <div className="bg-Blue h-screen">
              <div className="flex justify-end mr-5 pt-5 bg-Blue">
                <IoIosArrowBack
                  className="text-White size-5 cursor-pointer "
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
              <div className="mx-8 flex flex-col justify-center items-center pt-16">
                <Link to="https://vi-cross-landing-page-v1.vercel.app/">
                  <img src={logo} className="h-18" alt="logo" />
                </Link>
                {sidebar.map((item) => (
                  <Link
                    to={item.url}
                    className={`w-full p-3 mr-7 ml-5 rounded-lg flex items-center gap-2 mt-10 ${
                      location.pathname === item.url
                        ? "text-Blue"
                        : "text-White"
                    } ${
                      location.pathname === item.url
                        ? "bg-White"
                        : "bg-transparent"
                    }`}
                  >
                    <item.icon className="size-7 " />
                    <p className="font-bold font-myFont text-lg ">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div
              className="flex justify-end mr-5 bg-Blue h-screen pt-5"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoIosArrowForward className="text-White size-5 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
