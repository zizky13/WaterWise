import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import facebook from '../assets/images/facebook.png';
import google from '../assets/images/google.png';
import pictsignup from '../assets/images/SignUp-Auth.png';
import '../index.css';



export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
  
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate('/sidetabs');

        
      // Lakukan validasi dan proses pendaftaran di sini
    };

    const handleGoBack = () => {
        navigate('/');
    }


    const handleClick = () => {
        setPasswordShown(!passwordShown);
    };    
    
    return (
        <div className='w-auto h-auto overflow-hidden p-5'>
            <div className='flex flex-row h-screen items-center justify-center p-7 gap-10'>
                <div className='flex-1 border border-primary w-full items-center justify-center h-full rounded-3xl overflow-hidden'>
                    <div className='flex flex-row items-center pt-9 pl-9 pb-6 gap-2'>
                        <img src={google} className='h-4 w-5'/>
                        <span className='font-bi'>WaterWise</span>
                    </div>
                    <div className='flex-1 justify-center items-center p-8'>
                        <img src={pictsignup} className='h-auto w-auto object-contain'/>
                    </div>
                </div>
                <div className='flex-1 '>
                    <div className='flex-col p-5'>
                        <ArrowBackIcon onClick={handleGoBack} className='arrowBack'/>
                        <div className="mt-4">
                            <span className='authHead'>Sign up with</span>
                        </div>

                        <div className="flex flex-row mt-7 justify-between gap-8">
                            <button
                                type="submit"
                                className="btnGF"
                                >
                                <img src={google} className='h-4'/>
                                Google
                            </button>
                            <button
                                type="submit"
                                className="btnGF"
                                >
                                    <img src={facebook} className='h-4'/>
                                Facebook 
                            </button>
                        </div>
            
                        <div className="flex items-center justify-center py-6">
                            <div className="w-full h-px bg-gray-400"></div>
                            <span className="mx-2">or</span>
                            <div className="w-full h-px bg-gray-400"></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor="username" className="inputLabel">Username</label>
                                <div className='textInput'>
                                    <PersonIcon className='inputIcons'/>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        placeholder='Enter your username'
                                        onChange={(event) => setUsername(event.target.value)}
                                        className=" px-1 py-1 items-center justify-center outline outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="email" className="inputLabel">Email</label>
                                <div className='textInput '>
                                    <EmailIcon className='inputIcons'/>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        placeholder='Enter your email'
                                        onChange={(event) => setEmail(event.target.value)}
                                        className=" px-1 py-1 items-center justify-center outline outline-none w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="password" className="inputLabel">Password</label>
                                <div className='textInput '>
                                    <LockIcon className='inputIcons'/> 
                                    <input
                                        type={passwordShown ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        placeholder='Enter a strong password'
                                        onChange={(event) => setPassword(event.target.value)}
                                        className=" px-1 py-1 items-center justify-center outline outline-none w-full"
                                    />
                                    <button type="button" onClick={handleClick}>
                                        {passwordShown ? <VisibilityOffIcon className='inputIcons'/> : <VisibilityIcon className='inputIcons'/>}
                                    </button>
                                </div>
                            </div>
                
                            <span className='text-xs px-2 text-gray-400'>
                                *Minimum length in 6 characters.
                            </span>
                
                            <div className="flex mt-6 justify-center">
                                <button
                                type="submit"
                                onClick={handleSubmit}
                                className="bg-primary text-screenColor font-medium p-3 rounded-md hover:bg-subprimary font-sansab w-full"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className='flex mt-3 justify-center'>
                                <span className='text-sm px-1 font-sansar'>
                                    Already have an account?
                                </span>
                                <a href="/SignIn" className="font-sansab text-sm font-medium hover:underline text-primary">
                                    Log In 
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
