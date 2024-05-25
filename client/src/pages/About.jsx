import React from 'react';

export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
    <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
      Welcome to my Auth App!
    </h1>
    <p className='mb-4 text-slate-700'>
    This comprehensive web solution is crafted using the MERN (MongoDB, Express, React, Node.js) stack. It boasts robust authentication functionalities enabling users to register, log in, and log out seamlessly. Additionally, it grants exclusive access to secured routes accessible only to authenticated users.
    </p>
    <p className='mb-4 text-slate-700'>
    The front-end of this application is elegantly designed with React, leveraging React Router for smooth client-side navigation. On the other hand, the back-end is powered by Node.js and Express, with MongoDB serving as the resilient database solution. Authentication is seamlessly orchestrated through the utilization of JSON Web Tokens (JWT).
    </p>
    <p className='mb-4 text-slate-700'>
    Consider this application as a potent foundation for your next full-stack web project featuring authentication
    </p>


    <p> by QuanPhu</p>
  </div>
  );
}