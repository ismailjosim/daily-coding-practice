import React from 'react';
import { useEffect, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import './Header.css';


const Header = ({ handleAddTask }) => {
    const [taskItems, setTaskItems] = useState([]);
    // Load data from json file
    useEffect(() => {
        fetch('activities-data.json')
            .then(res => res.json())
            .then(data => setTaskItems(data))
    }, []);

    return (
        <div className='col-span-2 my-10'>
            <div>
                <a className='font-bold flex' href="">
                    <img className='w-14' src="./favicon.png" alt="coder logo" />
                    <p className='text-3xl font-bold mt-3'>Coder</p>
                </a>
                <div className='my-4'>
                    <h3 className='text-2xl text-black font-semibold'>Select Your Practice Task</h3>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {
                    taskItems.map(item => <Tasks key={item.id} item={item} handleAddTask={handleAddTask}></Tasks>)
                }
            </div>
        </div>
    );
};

export default Header;

// taskItems.map(task => <key = {task.id} task = { task }></key>
