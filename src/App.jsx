import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css'
import TopBar from "./components/TopBar.jsx";
import SearchInput from "./components/SearchInput.jsx";
import TimeAndLocation from "./components/TimeAndLocation.jsx";


function App() {

  return (
    <>
        <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopBar />
            <SearchInput />
            <TimeAndLocation />
        </div>
    </>
  )
}

export default App
