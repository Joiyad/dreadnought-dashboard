import React from 'react';

const Data = [
    {id:1, title:"Enroll", content:"completely free to enroll. You will put an effort of 4 to 5 hours per week", price:"$0", image:"/enroll.png"},
    {id:2, title:"Investment", content:"monetary investment to buy your domain name, website hosting, etc.", price:"$15", image:"/invest.png"},
    {id:3, title:"Refer", content:"You will get USD $50 for every referral who completes milestones.", price:"$50", image:"/refer.png"},
]

const MainDown = () => {
  return (
    <>
    <h2 className='text-2xl text-purple-400 font-semibold mt-8'>Explore</h2>
    <div className='flex flex-col md:flex-row gap-16 m-auto my-4'>
    {Data.map(({id, title, content, price, image}) => (
    <div className='w-60 p-4 flex flex-row text-white rounded-md bg-gradient-to-tr from-purple-800 to-violet-600 shadow-lg'>
        <div>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-gray-200'>{content}</p>
            <p className='text-pink-400 text-2xl'>{price}</p>
        </div>
        <div>
            <img src={image} alt='logo'/>
        </div>
    </div>))}
    </div>
    </>
  )
}

export default MainDown;