import React, { useState } from 'react';
import Aside from '../Aside/Aside';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [taskAdd, setTaskAdd] = useState(0);

    // Event Handler
    const handleAddTask = (time) => {
        const taskTime = parseInt(time)
        const newItem = taskAdd + taskTime;
        setTaskAdd(newItem);
    }
    return (
        <div className='bg-{#F2F4FA}'>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto'>
                <Header handleAddTask={handleAddTask}></Header>
                <div className='col-span-1 bg-white text-center h-2/4 sticky top-5 p-5 rounded-lg'>
                    <Aside taskAdd={taskAdd}></Aside>
                </div>
            </div>

        </div>
    );
};

export default Home;
// <Aside taskAdd={taskAdd}></Aside>
