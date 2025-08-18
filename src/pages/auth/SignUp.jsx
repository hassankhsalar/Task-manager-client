import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = () => {

    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminInivteToken, setAdminInivteToken] = useState('');

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

    return (
        <AuthLayout>
            
            <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
                <h3 className='text-xl font-semibold text-black'>Create an account</h3>
                <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below</p>

                <form onSubmit={handleSignUp}>
                    <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'></div>
                </form>


            </div>


        </AuthLayout>
    );
};

export default SignUp;