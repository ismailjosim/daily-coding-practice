import React from 'react';
import './Aside.css';
import './Aside.css';

const Aside = ({ taskAdd }) => {



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
                <h3 className='text-xl font-bold my-3'>Previous Complete Task</h3>
                <div>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>HTML</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>CSS</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>BootStrap 5</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>Tailwind CSS</p>
                    <p className='bg-slate-200 mb-3 text-md font-medium rounded-md py-2'>JavaScript</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold my-3'>Add A Break</h3>
                    <div className='flex justify-center gap-3 py-3 bg-slate-200 rounded-md'>
                        <button className="btn btn_custom btn-outline btn-info btn-circle"><span>10</span>m</button>
                        <button className="btn btn_custom btn-outline btn-info btn-circle"><span>15</span>m</button>
                        <button className="btn btn_custom btn-outline btn-info btn-circle"><span>20</span>m</button>
                        <button className="btn btn_custom btn-outline btn-info btn-circle"><span>25</span>m</button>
                        <button className="btn btn_custom btn-outline btn-info btn-circle"><span>30</span>m</button>
                    </div>
                </div>
            </div>
            <p className="taskTime">Task Time: <span className='font-bold'>{taskAdd} minutes</span></p>
        </div>
    );
};

export default Aside;
