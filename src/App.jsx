
import './App.css'
import { Outlet,Link } from "react-router-dom";

function App() {

  return (
    <>
      <div className="header">
          <ul>
            <li>
                <Link to={`/`}> Home </Link>
            </li>
            <li>
                <Link to={`/aboult`}> Aboult </Link>
            </li>
          </ul>
      </div>
      <div className='main'>
        <Outlet />
      </div>
    </>
  )
}

export default App
