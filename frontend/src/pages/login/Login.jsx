import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

import "./style.css"

function Login() {
    const [passwordToggle, setPasswordToggle] = useState(false)
    const passwordHandle = () => {
        setPasswordToggle((prev) => !prev)
    }

    return (
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="MERN Chat App Login Page" />
            </Helmet>
            <div className="loginContainer">
                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="email">Email Address <span className='loginAestrick'>*</span></label>
                    <input id='email' className='loginInput' type="email" placeholder='Enter Your Email Address' />
                </div>
                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="password">Password <span className='loginAestrick'>*</span></label>
                    <input id='password' className='loginInput loginPosition' type={`${passwordToggle ? 'text' : "password"}`} placeholder='Enter Your Password' />
                    {
                        passwordToggle
                            ?
                            <BiShow className='loginPasswordIcons loginPasswordIcon1' onClick={passwordHandle} />
                            :
                            <BiHide className='loginPasswordIcons' onClick={passwordHandle} />
                    }
                </div>
                <div className="loginButton">Login</div>
            </div>
        </>
    )
}

export default Login