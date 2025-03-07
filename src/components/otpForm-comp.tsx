import { useRef, useState } from "react";
import { z } from "zod"; // Import Zod
import logo from "../assets/img/Logo.png";
import LoginImage from "../assets/img/image.png";
import MaxWidthWrapper from "./max-width-wrapper";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

// Define the Zod schema for OTP validation
const otpSchema = z.string().length(6, { message: "OTP must be exactly 6 characters long" });

const OtpFormcomp = () => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
  const navigation = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null); // State to store validation error

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) {
      return; // Ignore non-numeric input
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && index > 0 && !inputRefs.current[index]?.value) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Validate OTP before proceeding
  const handleContinue = () => {
    const otpValue = otp.join(""); // Combine the OTP array into a single string
    try {
      otpSchema.parse(otpValue); // Validate using Zod
      setError(null); // Clear any previous error
      console.log("OTP is valid:", otpValue);
      navigation("/Confirmpassword");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message); // Set validation error message
      }
    }
  };

  return (
    <div className="bg-white h-screen">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[80%] lg:px-4">
            <div className="bg-Background rounded-3xl z-[1] mx-4  p-6 flex flex-col justify-center items-center md:px-20">
              <div className="mb-4 flex flex-col items-center">
                <img src={logo} alt="Logo" />
              </div>
              <h2 className="text-3xl font-bold font-myFont text-center mb-2 text-Blue">Enter OTP</h2>
              <p className="text-center mt-4 font-smbold text-Gray mb-7">
                We have sent a code to <a className="text-Blue font-myFont font-bold">example@gmail.com</a>
              </p>
              <div className="flex space-x-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    inputMode="numeric" // Show numeric keyboard on mobile devices
                    pattern="\d*" // Ensure only numbers are allowed
                    className={`w-[20%] h-18 text-center text-2xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Blue otp-input caret-Blue`}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    value={otp[index]}
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display validation error */}
              <button
                onClick={handleContinue} // Trigger validation on button click
                className="bg-Blue text-White p-3 rounded-lg mb-3 mt-8 w-full text-center font-myFont hover:bg-Background hover:text-Blue border border-Blue"
              >
                CONTINUE
              </button>
              <p className="text-center mt-4 font-smbold text-Gray mb-4">
                Didn't receive the email? <a className="text-Blue font-myFont font-bold cursor-pointer"> Click to Resend</a>
              </p>
              <div className="text-center mt-4 font-smbold flex items-center gap-1 hover:gap-4 text-Gray hover:text-Blue">
                <Link to="/login" className="font-myFont font-bold">
                  Back to Login
                </Link>
                <div>
                  <FaLongArrowAltRight className="size-5" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block mx-4 ">
              <img
                className="object-cover h-full rounded-3xl"
                src={LoginImage}
                alt="login-image"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OtpFormcomp;