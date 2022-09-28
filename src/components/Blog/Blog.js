import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10 mt-5'>
            <h1 className='text-4xl text-center font-bold'>InterView Question Answer</h1>
            <div className="divider py-3"></div>
            <div className='flex flex-col gap-5'>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: How Does React Work?</h2>
                    <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe reiciendis id nemo qui a numquam, quasi explicabo consequatur incidunt voluptatibus, quis similique harum. Vel dignissimos deleniti placeat nulla architecto tempore ipsa harum minima mollitia obcaecati eos voluptates magnam, repellat aliquam, corporis repudiandae? Libero, quod molestias aliquam est mollitia magni.</p>
                </div>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: Difference between Props and State?</h2>
                    <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe reiciendis id nemo qui a numquam, quasi explicabo consequatur incidunt voluptatibus, quis similique harum. Vel dignissimos deleniti placeat nulla architecto tempore ipsa harum minima mollitia obcaecati eos voluptates magnam, repellat aliquam, corporis repudiandae? Libero, quod molestias aliquam est mollitia magni.</p>
                </div>
                <div className='bg-white shadow-lg p-3 rounded-md'>
                    <h2 className='text-xl font-semibold mb-4'>Question: Where else can we use useEffect other than data load?</h2>
                    <p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe reiciendis id nemo qui a numquam, quasi explicabo consequatur incidunt voluptatibus, quis similique harum. Vel dignissimos deleniti placeat nulla architecto tempore ipsa harum minima mollitia obcaecati eos voluptates magnam, repellat aliquam, corporis repudiandae? Libero, quod molestias aliquam est mollitia magni.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
