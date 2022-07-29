import React from 'react';
const Data = [
    {id:1, title:"Y Combinator Startup School Certification", status:"achieved", image:"./learn.png"},
    {id:2, title:"Greater than 100 followers on LinkedIn Company PageCourse2", status:"not achieved", image:"./linkedin.png"},
    {id:3, title:"Greater than 50 followers on Twitter Company Page", status:"achieved", image:"./Twitter.png"},
    {id:3, title:"AWS Activate Credits", status:"achieved", image:"./aws.png"},
    {id:3, title:"GCP Startup Credits", status:"achieved", image:"./gcp-icon.png"},
]

const MainUp = () => {
  return (
    <>
    <h2 className='text-center text-3xl text-gray-200 font-bold mt-16 mb-6'>Your Milestones</h2>
    <div className='flex flex-col md:flex-row gap-8 md:gap-x-4'>
    {Data.map(({id, title, status, image}) => (
    <div key={id} className='w-40 p-4 flex flex-col items-center text-white rounded-[10px] bg-gradient-to-tr from-purple-400 to-violet-600 shadow-lg'>
            <img src={image} alt='logo' width="50" height="50"/>
            <h2 className='text-xs font-semibold'>{title}</h2>
    </div>))}
    </div>
    </>
  )
}

export default MainUp;