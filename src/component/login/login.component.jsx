import React, { useState, useContext, useEffect } from "react";
import FormInput from "../Form-Input/form-input.component";
import Loader from "../loader/loader.component";

import {LogInContext} from '../../providers/login/login.provider';

import { GrFormClose } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const LogIn = () => {

    const { toggleLogInHidden }  = useContext(LogInContext);
    const [isLoading, setIsLoading] = useState(true);

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (<div>
       
        { !isLoading ? (<div className="bg-[rgba(0,0,0,0.5)] w-[119rem] h-[55rem] justify-center items-center fixed z-20">
        <div className="flex-col mt-24 ml-[49rem] h-[40rem] w-[30rem] bg-white z-20 border-black rounded-xl fixed">
            <GrFormClose size={30} className='ml-2 mt-3 cursor-pointer' onClick={toggleLogInHidden} />
            <p className="font-bold text-3xl ml-4 mt-4">LogIn</p>
            <form className="mt-10">
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />

                <div className="flex ml-4 cursor-pointer">
                    <p className="text-sm text-gray-500 font-light">Forgot password?</p>
                    <p className="text-sm text-green-600 ml-2 font-medium">Reset it</p>
                </div>

                <button className="text-white bg-green-600 rounded-xl p-4 w-[96%] ml-2 font-bold mt-8">
                    LogIn
                </button>

                <p className="text-center text-gray-500 mt-6">or</p>

                <div className="flex-col ml-6">
                    <div className="flex items-center mt-6 w-full cursor-pointer">
                        <BsFillTelephoneFill size={25} className='ml-16' />
                        <p className="text-lg text-slate-700 font-semibold ml-12">Continue With Phone</p>
                    </div>
                    <div className="flex items-center mt-6 w-full cursor-pointer">
                        <img src='https://i.postimg.cc/wjq4NbXY/fb.png' alt='icon' className="ml-12 h-8 w-12" />
                        <p className="text-lg text-slate-700 font-semibold ml-8">Continue With Facebook</p>
                    </div>
                    <div className="flex items-center mt-6 w-full cursor-pointer">
                        <img src="https://i.postimg.cc/tg01f82L/googlr.png" alt='icon' className="ml-[3.5rem] h-8 w-8" />
                        <p className="text-lg text-slate-700 font-semibold ml-12">Continue With Google</p>
                    </div>
                </div>

            </form>
        </div>
        </div>) : <Loader />}
        </div>
    )
};

export default LogIn;