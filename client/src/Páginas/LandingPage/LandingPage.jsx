import React from 'react'
import {Link} from 'react-router-dom'
import "./LandingPage.css";

export default function LadingPage () {
    return (
        <div>
            <div className='landing-containter'>
                <div className='cotainer-sec'>
        <div className='Welcome'>
            <h1>Welcome to </h1>
            <h3> Pokemon Api</h3>
                </div>
                <Link to = {'/home'}><button className='loading'><b>Go!</b></button></Link>
            </div>
            </div>
        </div>
    )
}