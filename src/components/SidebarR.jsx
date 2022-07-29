import React from 'react';

const Benefits = [
  {id:1, image:"/gcp.png", text:"You get lifetime ability and fearless attitude to launch your ideas within 1 week time with USD $10 to 15 investment"},
  {id:2, image:"/coin.png", text:"You can easily earn upto USD $1000"},
  {id:3, image:"/aws.png", text:"we will pay you 10% of AWS credits used on monthly basis"},
  {id:4, image:"/gcp-icon.png", text:"we will pay you 5% of GCP credits used on monthly basis"},
]

const SidebarR = () => {
  return (
    <div>
        <div className='hidden md:block h-full bg-transparent  bg-opacity-80 bg-slate-900'>
          <h2 className='text-white text-4xl p-8 text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-pink-400 font-semibold'>Benefits</h2>
          <div className='p-4 flex flex-col gap-4'>
            {Benefits.map(({id, image, text}) => (
            <div className='w-40 p-1 border-2 border-white border-opacity-10 flex flex-col items-center rounded-md'>
              <img src={image} alt="logo" width="50" height="50"/>
              <h2 className='text-white text-xs text-center'>{text}</h2>
            </div>))}
          </div>
        </div>
    </div>
  )
}

export default SidebarR