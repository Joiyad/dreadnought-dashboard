import './App.css';
import MainDown from './components/Main-down';
import MainUp from './components/Main-up';
import Sidebar from './components/Sidebar'
import SidebarR from './components/SidebarR';
import Title from './components/Title';

function App() {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <div className='m-auto md:pl-36'>
          <Title />
          <MainUp />
          <MainDown />
        </div>
        <SidebarR />
      </div>
    </div>
  );
}

export default App;
