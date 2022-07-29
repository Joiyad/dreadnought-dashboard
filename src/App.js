import './App.css';
import MainDown from './components/Main-down';
import MainUp from './components/Main-up';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <div className='flex flex-row'>
        <Sidebar />
        <div className='m-auto'>
          <MainUp />
          <MainDown />
        </div>
      </div>
    </div>
  );
}

export default App;
