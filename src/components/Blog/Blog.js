import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10 mt-5'>
            <h1 className='text-4xl text-center font-bold'>InterView Question Answer</h1>
            <div className="divider py-3"></div>
            <div className='flex flex-col gap-5'>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: How Does React Work?</h2>
                    <p className='mb-3'>ReactJS divides the UI into isolated reusable pieces of code known as components.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It's possible to have as many components as necessary without cluttering your code. At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes. React allows you to effectively reconstruct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.
                    </p>
                </div>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: Difference between Props and State?</h2>
                    <p className='mb-3'>Both the props and the state decide what data the component will display. They are simple Javascript objects that will re-render the component every time they change. Initially, both the props and the state can have default values or receive values from a parent component.
                    </p>
                    <p className='mb-3'>
                        <strong className='font-semibold'>Props:</strong> Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.

                        Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.

                        We pass the keyword props as a parameter to the function to access props in a function-based component.
                    </p>
                    <p className='mb-3'>
                        <strong className='font-semibold'>State:</strong>
                        The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again.

                    </p>

                </div>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: Where else can we use useEffect other than data load?</h2>
                    <p className='mb-3'>Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them. According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. let's take a look at some use cases for this hook.
                    </p>
                    <div>
                        <li>Running once on mount: fetch API data</li>
                        <li>Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>
                        <li>Running on state change: trigger animation on new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>
                        <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </div>
                    <p className='mb-3 mt-2'>In my opinion, understanding the underlying design concepts and best practices of the useEffect Hook is a key skill to master if we will become a next-level React developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
