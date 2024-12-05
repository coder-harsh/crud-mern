import './App.css'
import '@mantine/core/styles.css';
import PopUp from './components/PopUp';
import UserTable from './components/Table/UserTable';
import AddUser from './components/AddUser';
function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <PopUp />
        <UserTable />
        <AddUser />
      </div>
    </>
  )
}

export default App
