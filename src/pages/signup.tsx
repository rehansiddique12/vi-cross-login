import { z } from "zod";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import logo from "../assets/img/Logo.png";
import { FaGoogle } from "react-icons/fa";
import { IoMdUnlock } from "react-icons/io";
import { CheckCircle2 } from "lucide-react";
import { TbEyeClosed } from "react-icons/tb";
import { IoLogoApple } from "react-icons/io5";
import LoginImage from "../assets/img/image.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMailUnreadOutline } from "react-icons/io5";
import MaxWidthWrapper from "../components/max-width-wrapper";

const Signup = () => {
  const [eye, setEye] = useState(true);
  const [eye1, setEye1] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const signupSchema = z
    .object({
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .regex(/^[a-zA-Z][^@\s]*@[^\s@]+\.[^\s@]+$/, {
          message: "Invalid email address format",
        })
        .regex(/[a-zA-Z]/, { message: "Email is requed" }),
      password: z
        .string()

        .regex(/[A-Z]/, {
          message: "Password must contain at least 1 uppercase letter",
        })
        .regex(/[a-z]/, {
          message: "Password must contain at least 1 lowercase letter",
        })
        .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
        .regex(/[^A-Za-z0-9]/, {
          message: "Password must contain at least 1 special character",
        })
        .min(8, { message: "Password must be at least 8 characters long" })
        .min(1, { message: "Password is required" }),
      confirmPassword: z
        .string()
        .regex(/[A-Z]/, {
          message: "Password must contain at least 1 uppercase letter",
        })
        .regex(/[a-z]/, {
          message: "Password must contain at least 1 lowercase letter",
        })
        .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
        .regex(/[^A-Za-z0-9]/, {
          message: "Password must contain at least 1 special character",
        })
        .min(8, { message: "Password must be at least 8 characters long" })
        .min(1, { message: "Confirm Password is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const handleSignUp = () => {
    const formData = {
      email,
      password,
      confirmPassword,
    };

    try {
      signupSchema.parse(formData);
      setErrors({});
      console.log("Form is valid:", formData);

      setShowNotification(true);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as { [key: string]: string });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="bg-White h-screen">
      <MaxWidthWrapper>
        <div className="flex justify-center items-center h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-[80%] lg:px-4">
            <div className="bg-Background rounded-3xl  mx-4 p-6 flex flex-col justify-center items-center md:px-20">
              <div className="mb-8 flex flex-col items-center">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col text-center justify-self-center items-center w-full mb-5">
                <button className="corser-pointer flex justify-center items-center gap-3 md:text-2xl mb-5 border rounded-xl w-full py-3 bg-Red text-White px-4 text-center">
                  <FaGoogle />
                  <p className="t">Continue With Google</p>
                </button>
                <button className="corser-pointer flex justify-center items-center gap-3 md:text-2xl mb-5 border rounded-xl w-full py-3 bg-black text-White px-4 text-center">
                  <IoLogoApple />
                  <p>Continue With Apple</p>
                </button>
                <fieldset className="w-full border-t border-Gray mt-5 mb-5 text-center">
                  <legend className="px-2 text-[15px]">
                    Or Sign In With Email
                  </legend>
                </fieldset>
              </div>

              <div className="w-full">
                <div className="flex items-center gap-3 text-xl mb-2 border rounded-xl py-3 border-Gray px-4">
                  <IoMailUnreadOutline />
                  <input
                    type="email"
                    placeholder="Email"
                    className="font-smbold font-myFont outline-none w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2 mt-0">
                    {errors.email}
                  </p>
                )}{" "}
                <div className="flex w-full py-3 border-Gray px-4 mb-2 border rounded-xl justify-between items-center">
                  <div className="flex items-center gap-3 text-xl w-full pr-3">
                    <IoMdUnlock />
                    <input
                      type={eye ? "password" : "text"}
                      placeholder="Password"
                      className="font-smbold font-myFont outline-none w-full"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div onClick={() => setEye(!eye)}>
                    {eye ? (
                      <TbEyeClosed className="size-6" />
                    ) : (
                      <VscEye className="size-6" />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mb-2 mt-0">
                    {errors.password}
                  </p>
                )}
                <div className="flex w-full py-3 border-Gray px-4 mb-2 border rounded-xl justify-between items-center">
                  <div className="flex items-center gap-3 text-xl w-full pr-3">
                    <IoMdUnlock />
                    <input
                      type={eye1 ? "password" : "text"}
                      placeholder="Confirm Password"
                      className="font-smbold font-myFont outline-none w-full"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div onClick={() => setEye1(!eye1)}>
                    {eye1 ? (
                      <TbEyeClosed className="size-6" />
                    ) : (
                      <VscEye className="size-6" />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mb-2 mt-0">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                onClick={handleSignUp}
                className="w-full corser-pointer bg-Blue text-White rounded-xl font-smbold py-4 font-myFont text-center hover:bg-Background hover:text-Blue border border-Blue"
              >
                SIGN UP
              </button>
              <p className="text-center mt-4 font-smbold text-Gray">
                Don't have an account?{" "}
                <Link to="/login" className="text-Blue font-myFont font-bold">
                  Login
                </Link>
              </p>
            </div>
            <div className="hidden lg:block mx-4  ">
              <img
                className="object-cover h-full rounded-3xl"
                src={LoginImage}
                alt="login-image"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-opacity duration-300">
          <CheckCircle2 size={20} />
          <span>SignUp Successful!</span>
        </div>
      )}
    </div>
  );
};

export default Signup;
