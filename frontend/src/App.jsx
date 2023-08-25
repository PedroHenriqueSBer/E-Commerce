import Login from './components/Login/Login'
import {Outlet} from 'react-router-dom'
export default _ =>
    <>
        <Login/>
        <Outlet/>
    </>