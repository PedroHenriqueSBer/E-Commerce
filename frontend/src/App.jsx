import Header from './components/Header/Header'
import {Outlet} from 'react-router-dom'
export default _ =>
    <>
        <Header/>
        <Outlet/>
    </>