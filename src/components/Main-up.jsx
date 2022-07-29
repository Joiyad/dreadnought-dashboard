import React from 'react';

const Data = [
    {id:1, title:"title1", content:"content1", price:"price1", image1:"logo1"},
    {id:2, title:"title2", content:"content2", price:"price2", image1:"logo2"},
    {id:3, title:"title3", content:"content3", price:"price3", image1:"logo3"},
]

const MainUp = () => {
  return (
    <>
    <div className='flex flex-row gap-x-12 mt-20'>
    {Data.map(({id, title, content, price, image}) => (
    <div className='w-40 p-4 flex flex-col text-white border-2 border-white border-opacity-20 rounded-md bg-gradient-to-t from-slate-900 to-black'>
            <img src={image} alt='logo'/>
            <h2 className='text-2xl'>{title}</h2>
            <p>{content}</p>
            <p>{price}</p>
    </div>))}
    </div>
    </>
  )
}

export default MainUp;