import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default Layout;