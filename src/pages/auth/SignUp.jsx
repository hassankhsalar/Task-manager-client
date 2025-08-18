import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import Input from "../../components/Inputs/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInivteToken, setAdminInivteToken] = useState("");

  const [error, setError] = useState(null);

  //handles signup form submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("please enter full Name");
      return;
    }

    if (!validateEmail(email)) {
      setError("please enter a valid email address");
      return;
    }

    if (!password) {
      setError("please enter the password");
      return;
    }

    setError("");

    //Signup API call
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />

            {/* Email input */}
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="salar@example.com"
              type="text"
            />

            {/* Password */}
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Minimum * chars"
              type="password"
            />

            {/* admin invitation code */}
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Admin Invite Token"
              placeholder="6 digit code"
              type="text"
            />
            </div>

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button type="Submit" className="btn-primary">
              Signup
            </button>

            <p className="text-[13px] text-slate-800 mt-3">
              Already have an account?{" "}
              <Link to="/login" className="font-medium underline">
                Login
              </Link>
            </p>
          
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
