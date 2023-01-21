import React from 'react'
import './notFound.css'

export default function NotFound() {
    return (
        <div className='container-notFound'>
            <img className='notFound' src='https://i.gifer.com/origin/d7/d787d998103cc44e74f607cfd48d130f.gif' alt="" />
            <div className='message-container'>
                <h1>Oh, sorry</h1>
                <p>We couldn't find what you were looking for</p>
            </div>
        </div>
    )
}