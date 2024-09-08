import logo from '../assets/images/logo-vegan-felino.png';
import Icono from './Icono';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='logo' className='logo' />
        </Link>
        <Link to='/tienda' className='nav-link'>
          <h2>Tienda</h2>
        </Link>
        <Link to='/recetas' className='nav-link'>
          <h2>Recetas</h2>
        </Link>
        <Link to='/puntosdeventa' className='nav-link'>
          <h2> Puntos de venta</h2>
        </Link>
        <Link to='/blog' className='nav-link'>
          <h2>Blog</h2>
        </Link>
        <Icono />
      </div>
    </div>
  );
};

export default Navbar;
