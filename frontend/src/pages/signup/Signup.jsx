import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";

import "./style.css"

function Signup() {
    const [passwordToggle1, setPasswordToggle1] = useState(false)
    const [passwordToggle2, setPasswordToggle2] = useState(false)
    const [file, setFile] = useState('https://media.istockphoto.com/id/982412666/vector/%C3%B0%C3%B0%C2%B5%C3%B1%C3%B0%C3%B1%C3%B1.jpg?s=612x612&w=0&k=20&c=lAUDyheJMMQHcv6EVNDFMq2okJpEt7IoJPc00HFBvp0=');

    const passwordHandle1 = () => {
        setPasswordToggle1((prev) => !prev)
    }
    const passwordHandle2 = () => {
        setPasswordToggle2((prev) => !prev)
    }

    const handleChange = (e) => {
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <Helmet>
                <title>Signup</title>
                <meta name="description" content="MERN Chat App Signup Page" />
            </Helmet>

            <div className="loginContainer">
                <div className="signupImageSection">
                    <label htmlFor="signupImage"><img className='signupImage' src={file} alt="" /></label>
                    <div className="imgTitle">Please Upload Your Image <span className='loginAestrick'>*</span></div>
                    <input id='signupImage' className='signInputImage' type="file" accept='*/image' onChange={handleChange} />
                </div>

                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="name">Name <span className='loginAestrick'>*</span></label>
                    <input id='name' className='loginInput' type="text" placeholder='Enter Your Name' />
                </div>
                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="email">Email Address <span className='loginAestrick'>*</span></label>
                    <input id='email' className='loginInput' type="email" placeholder='Enter Your Email Address' />
                </div>
                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="password">Password <span className='loginAestrick'>*</span></label>
                    <input id='password' className='loginInput loginPosition' type={`${passwordToggle1 ? 'text' : "password"}`} placeholder='Enter Your Password' />
                    {
                        passwordToggle1
                            ?
                            <BiShow className='loginPasswordIcons loginPasswordIcon1' onClick={passwordHandle1} />
                            :
                            <BiHide className='loginPasswordIcons' onClick={passwordHandle1} />
                    }
                </div>
                <div className="loginPasswordShow">
                    <label className='loginLabel' htmlFor="confirm">Confirm Password <span className='loginAestrick'>*</span></label>
                    <input id='confirm' className='loginInput loginPosition' type={`${passwordToggle2 ? 'text' : "password"}`} placeholder='Enter Your Confirm Password' />
                    {
                        passwordToggle2
                            ?
                            <BiShow className='loginPasswordIcons loginPasswordIcon1' onClick={passwordHandle2} />
                            :
                            <BiHide className='loginPasswordIcons' onClick={passwordHandle2} />
                    }
                </div>
                <div className="loginButton">Signup</div>
            </div>

        </>
    )
}

export default Signup