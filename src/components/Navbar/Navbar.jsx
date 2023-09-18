import PropTypes from 'prop-types';
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

 
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
    return (
        <nav className='bg-yellow-200 text-black'>
            <div className='md:hidden bg-yellow-200' onClick={()=>setOpen(!open)}>
                {
                    open === true?  <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu className='text-2xl'></AiOutlineMenu>
                }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000 
            ${open ? 'top-6' : '-top-60'}
            bg-yellow-200 px-6 rounded-lg absolute`}>
                {
                    routes.map(route =>  <Link key={route.id} route={route
                    }></Link>)
                }
            </ul>
        </nav>
    );
};

Link.propTypes = {
    route: PropTypes.object
}
export default Navbar;