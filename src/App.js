import './App.css';
import MainUp from './components/Main-up';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div>
      <div className='flex flex-row'>
        <Sidebar />
        <MainUp />
      </div>
    </div>
  );
}

export default App;
