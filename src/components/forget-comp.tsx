import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod"; // Import Zod for validation
import logo from "../assets/img/Logo.png";
import LoginImage from "../assets/img/image.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

// Define Zod schema for email validation
const emailSchema = z
.string()
.min(1, { message: "Email is required" }) // Ensure the field is not empty
.regex(/^[a-zA-Z][^@\s]*@[^\s@]+\.[^\s@]+$/, { message: "Invalid email address format" })
.regex(/[a-zA-Z]/, { message: "Email is requed" 
  });

const Forgetcomp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle email input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(null); // Clear error while typing
  };

  // Handle form submission
  const handleContinue = () => {
    try {
      emailSchema.parse(email); // Validate email
      setError(null);
      console.log("Valid email:", email);
      navigate("/otp"); // Redirect to OTP page
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <div className="bg-White h-screen">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[80%] lg:px-4">
            <div className="bg-Background rounded-3xl z-[1] mx-2 md:mx-4  p-6 flex flex-col justify-center items-center md:px-20">
              <div className="mb-8 flex flex-col items-center">
                <img src={logo} alt="Logo" />
              </div>
              <div className="flex flex-col text-center justify-self-center items-center w-full mb-5">
                <h1 className="font-bold font-myFont text-3xl text-Blue">Forgot Password?</h1>
                <p className="mt-4 text-Gray">No worries, we'll send you reset instructions.</p>
              </div>

              <div className="w-full">
                <div className="flex items-center gap-3 text-xl mb-4 border rounded-xl w-full py-4 border-Gray px-4">
                  <i>
                    <IoMailUnreadOutline />
                  </i>
                  <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="font-smbold font-myFont outline-none w-full"
                  />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Display validation error */}
              </div>

              <button
                onClick={handleContinue}
                className="w-full cursor-pointer bg-Blue text-White rounded-xl font-smbold py-4 font-myFont text-center hover:bg-Background hover:text-Blue border border-Blue"
              >
                Forgot Password
                
              </button>

              <div className="text-center mt-4 font-smbold flex items-center gap-2 hover:gap-4 text-Gray hover:text-Blue">
                <Link to="/login" className="font-myFont font-bold">
                  Back to Login
                </Link>
                <div>
                  <FaLongArrowAltRight className="size-5" />
                </div>
              </div>
            </div>

            <div className="hidden lg:block mx-4 ">
              <img className="object-cover h-full rounded-3xl" src={LoginImage} alt="login-image" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Forgetcomp;
