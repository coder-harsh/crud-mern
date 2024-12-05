import './App.css'
import '@mantine/core/styles.css';
import PopUp from './components/PopUp';
import UserTable from './components/Table/UserTable';
import AddUser from './components/Table/AddUser';
function App() {

  return (
    <>
      <div>
        <h1 className='text-red-500'>Hi</h1>
        <PopUp />
        <UserTable />
        <AddUser />
      </div>
    </>
  )
}

export default App
