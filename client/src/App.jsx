import './App.css'
import '@mantine/core/styles.css';
import PopUp from './components/PopUp';
import UserTable from './components/Table/UserTable';;
function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <UserTable />
      </div>
    </>
  )
}

export default App
