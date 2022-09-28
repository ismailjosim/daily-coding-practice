import React, { useState } from 'react';
import './Aside.css';
import './Aside.css';

const Aside = ({ taskAdd }) => {
    const [breakTime, setBreakTime] = useState(0);

    // Event Handler
    const handleBreakTime = (e) => {
        const btnText = e.target.innerText;
        const btnNumber = parseInt(btnText.slice(0, -1));
        setBreakTime(btnNumber);
    }
    return (
        <div className='col-span-1 bg-white'>
            <div className='flex justify-around align-middle'>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div>
                    <h3>Ismail Josim</h3>
                    <p>Bhola, Bangladesh</p>
                </div>
            </div>
            <div>
                <h3 className='text-xl font-bold my-3'>Previous Completed Task</h3>
                <div>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>HTML</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>CSS</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>Tailwind CSS</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>JavaScript</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold my-3 text-left'>Add A Break</h3>
                    <div className='flex justify-center gap-3 py-3 bg-slate-200 rounded-md'>
                        <button onClick={(e) => handleBreakTime(e)} className="btn btn_custom btn-outline btn-info btn-circle">10m</button>
                        <button onClick={(e) => handleBreakTime(e)} className="btn btn_custom btn-outline btn-info btn-circle">15m</button>
                        <button onClick={(e) => handleBreakTime(e)} className="btn btn_custom btn-outline btn-info btn-circle">20m</button>
                        <button onClick={(e) => handleBreakTime(e)} className="btn btn_custom btn-outline btn-info btn-circle">30m</button>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold my-3 text-left'>Task Details</h3>
                    <div className='py-3 bg-slate-200 rounded-md'>
                        <p className="taskTime">Task Time: <span className='font-bold'>{taskAdd} minutes</span></p>
                    </div>
                    <div className='py-3 bg-slate-200 rounded-md  my-3'>
                        <p className="taskTime">Break Time:
                            <span className='font-bold'> {breakTime} minutes</span>
                        </p>
                    </div>
                </div>
                <button className='btn text-white btn-info w-full my-5'>Task Completed</button>
            </div>

        </div>
    );
};

export default Aside;
