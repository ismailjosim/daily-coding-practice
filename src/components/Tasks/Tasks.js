import React from 'react';

const Tasks = ({ item, handleAddTask }) => {
    const { name, image, description, time } = item;
    return (
        <div className="card shadow-xl bg-slate-50 rounded-md">
            <figure className="p-3">
                <img src={image} alt="coding Task" className="rounded-md shadow-md" />
            </figure>
            <div className="text-left p-5">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='text-justify my-3'>{description > 200 ? description : description.slice(0, 150) + '...'}</p>
                <p className='my-3'>Task Time: <span className='font-bold'>{time}min</span></p>

                <div className="">
                    <button onClick={() => handleAddTask(item.time)} className="btn btn-info text-white">Add Task</button>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
// {strInstructions > 300 ? strInstructions : strInstructions.slice(0, 250)
