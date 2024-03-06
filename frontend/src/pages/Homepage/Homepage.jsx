import React from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'
import "./style.css"
import { useState } from 'react'

function Homepage() {
    const [tabToggle, settabToggle] = useState(true)
    const tabHandle = () => {
        settabToggle(prev => !prev);
    }
    return (
        <>
            <div className="container">

                <div className="homeHeadline">Mern Chat App</div>

                <div className="homeSelect">
                    <div className={` homeSelect1 ${tabToggle ? 'homeSelect1Toggle' : ""}`} onClick={tabHandle}>Login</div>
                    <div className={` homeSelect1 ${tabToggle ? "" : 'homeSelect1Toggle'}`} onClick={tabHandle}>Signup</div>
                </div>

                {
                    tabToggle ?
                        <Login />
                        :
                        <Signup />
                }
            </div>
        </>
    )
}

export default Homepage