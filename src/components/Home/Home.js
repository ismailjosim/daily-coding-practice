import React, { useState } from 'react';
import Aside from '../Aside/Aside';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';

const Home = () => {
    const [taskAdd, setTaskAdd] = useState(0);

    // Event Handler
    const handleAddTask = (time) => {
        const taskTime = parseInt(time)
        const newItem = taskAdd + taskTime;
        setTaskAdd(newItem);
    }
    return (
        <div className='bg-{#F2F4FA} w-11/12 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5'>
                <Header handleAddTask={handleAddTask}></Header>
                <div className='col-span-1 bg-white text-center md:h-full lg:sm:h-2/4 sticky top-5 p-4 rounded-lg'>
                    <Aside taskAdd={taskAdd}></Aside>
                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Home;


