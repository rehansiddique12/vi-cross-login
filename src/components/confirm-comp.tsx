import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod"; // Import Zod for validation
import { VscEye } from "react-icons/vsc";
import logo from "../assets/img/Logo.png";
import { CiUnlock } from "react-icons/ci";
import { TbEyeClosed } from "react-icons/tb";
import LoginImage from "../assets/img/image.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import MaxWidthWrapper from "../components/max-width-wrapper";

// Define password validation schema
const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" })
      .regex(/[A-Z]/, { message: "Password must contain at least 1 uppercase letter" })
      .regex(/[a-z]/, { message: "Password must contain at least 1 lowercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least 1 special character" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Confirmpassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [errors, setErrors] = useState({ password: "", confirmPassword: "" });
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = () => {
    try {
      passwordSchema.parse({ password, confirmPassword });
      setErrors({ password: "", confirmPassword: "" }); // Clear errors if validation passes
      console.log("Password reset successful!");
      navigate("/login");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors = err.flatten().fieldErrors;
        setErrors({
          password: formattedErrors.password?.[0] || "",
          confirmPassword: formattedErrors.confirmPassword?.[0] || "",
        });
      }
    }
  };

  return (
    <div className="bg-White h-screen">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[80%] lg:px-4">
            <div className="bg-Background rounded-3xl z-[1] mx-4 p-6 flex flex-col justify-center items-center md:px-20">
              <div className="mb-8 flex flex-col items-center">
                <img src={logo} alt="Logo" />
              </div>
              <div className="flex flex-col text-center justify-self-center items-center w-full mb-5">
                <h1 className="font-bold font-myFont text-3xl text-Blue">
                  Set New Password
                </h1>
                <p className="mt-4 text-Gray">
                  Must be at least 8 characters, with an uppercase, lowercase, and a special character.
                </p>
              </div>

              <div className="w-full mt-6">
                {/* Password Input */}
                <div className="flex w-full py-3 border-Gray px-4 mb-2 border rounded-xl justify-between items-center">
                  <div className="flex items-center gap-3 text-lg w-full pr-3">
                    <CiUnlock />
                    <input
                      type={eye ? "password" : "text"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="font-smbold font-myFont outline-none w-full"
                    />
                  </div>
                  <div onClick={() => setEye(!eye)}>
                    {eye ? <TbEyeClosed className="size-5" /> : <VscEye className="size-5" />}
                  </div>
                </div>
                {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

                {/* Confirm Password Input */}
                <div className="flex w-full py-3 border-Gray px-4 mb-2 border rounded-xl justify-between items-center">
                  <div className="flex items-center gap-3 text-lg w-full pr-3">
                    <CiUnlock />
                    <input
                      type={eye1 ? "password" : "text"}
                      name="confirmPassword"
                      value={confirmPassword} // FIXED: Use correct state
                      onChange={(e) => setConfirmPassword(e.target.value)} // FIXED: Update correct state
                      placeholder="Confirm Password"
                      className="font-smbold font-myFont outline-none w-full"
                    />
                  </div>
                  <div onClick={() => setEye1(!eye1)}>
                    {eye1 ? <TbEyeClosed className="size-5" /> : <VscEye className="size-5" />}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mb-2">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer mt-6 bg-Blue text-White rounded-xl font-smbold py-4 font-myFont text-center hover:bg-Background hover:text-Blue border border-Blue"
              >
                Reset Password
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

export default Confirmpassword;
