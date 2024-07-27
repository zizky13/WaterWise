import React, { useState } from 'react';

import ToDoList from '../../components/todolist.js';
import UsageBar from '../../components/usageBar.js'
import DailyQuest from '../../components/quest.js'

export default function Dasboard() {
    const user = 'Miguel'

    return (
        <div className='flex-1 overflow-hidden'>
            <div className='flex flex-row w-70 gap-6 items-center'>
                <div className='flex flex-col w-50 p-4'>
                    <h1 className='font-bungeer text-primary text-2xl mb-2'> Hello  {user} </h1>
                    <p className='font-sansa text-primary text-lg'> Remember that the normal of water usage is 120 liters per day – that's equivalent to 24,000 drops. Let's make every drop count!</p>
                </div>
                <div className='flex-1 p-4'>
                    <UsageBar/>
                </div>
            </div>
            <div className='flex'>
                <div className='w-full'> 
                    <ToDoList/>
                </div>
                <div className=' p-4'>
                    <DailyQuest/>
                </div>
            </div>
        </div>
    )
}