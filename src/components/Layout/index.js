import { Outlet } from 'react-router-dom';
import './index.scss';
import Navbar from '../Navbar';

const Layout = () =>
{
    return <div className='App page' id='pageWrap wrapper'>
        <span className='Navbar'>
            <Navbar />
        </span>
        <Outlet />
    </div>
}

export default Layout;