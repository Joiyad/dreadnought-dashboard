import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(true);
  
    return (
    <>
    <div className="md:hidden p-8 cursor-pointer text-white" id="menu-button" onClick={() => {setIsopen(!isOpen)}}  >
      <MenuIcon />
    </div>

    {/* full navbar */}
    <div className="hidden md:pt-16 z-20 md:block w-auto md:w-48 fixed h-screen bg-transparent bg-slate-900 bg-opacity-60 hover:transition-all overflow-hidden border-r-2 border-white border-opacity-10 font-semibold" id="menuN" >
      <nav>
        <div className="flex flex-col text-white pl-4 gap-y-8">
          <a href="/0" className="px-4 py-3 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:rounded-[20px] flex flex-row"><HomeOutlinedIcon className="mr-4" fontSize="medium" /><p>Home</p></a>
          <a href="/1" className="px-4 py-3 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:rounded-[20px] flex flex-row"><AccountCircleIcon className="mr-4" fontSize="medium" /><p>Profile</p></a>
          <a href="/2" className="px-4 py-3 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:rounded-[20px] flex flex-row w-fit" ><LightbulbOutlinedIcon className="mr-4" fontSize="medium" /><p>Achievements</p></a>
          <a href="/3" className="px-4 py-3 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:rounded-[20px] flex flex-row"><ConnectWithoutContactOutlinedIcon className="mr-4" fontSize="medium" /><p>Contact</p></a>
        </div>
      </nav>
    </div>

    {/* menu mobile */}
    <div className={isOpen ? "hidden" : "md:block z-20 fixed w-full h-full bg-slate-900 bg-opacity-60 hover:transition-all overflow-hidden hover:border-r-2 border-white border-opacity-10"} id="menuN" >
      <nav>
        <div className="flex flex-col text-white">
          <a href="/profile" className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"><AccountCircleIcon className="mr-7" fontSize="large" /><p>Profile</p></a>
          <a href="/projects" className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row" ><LightbulbOutlinedIcon className="mr-7" fontSize="large" /><p>Projects</p></a>
          <a href="/connect" className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"><ConnectWithoutContactOutlinedIcon className="mr-7" fontSize="large" /><p>Connect</p></a>
          <a href="/" className="p-4 bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 flex flex-row"><HomeOutlinedIcon className="mr-7" fontSize="large" /><p>Back</p></a>
        </div>
      </nav>
    </div>
  </>
  )
}

export default Sidebar;