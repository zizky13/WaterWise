import React, { useState } from 'react';
import profile from '../assets/images/google.png';

export default function Dasboard() {
    return (
        <div className='flex-1 h-screen w-screen overflow-hidden'>
            <div className="flex flex-col bg-green-400">
                <div className="flex flex-row">
                    <img src={profile} className='w-20 h'/>
                    <span>p</span>
                </div>
            </div>
            <div>
                <span>span</span>
            </div>
            <div>
                <span>p</span>
            </div>
        </div>
    )
}
