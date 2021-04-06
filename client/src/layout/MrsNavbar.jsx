import { Link } from 'react-router-dom'

import icon from '../assets/images/icon01.png';
import tome from '../assets/images/tome.png';

import '../assets/style/MrsNavbar.css';

export default function MrsNavbar(props) {
  const { currentUser, handleLogout } = props;
  
  return (
    <header>
      <div className='brand-box'>
      <img className='brand-icon' src={tome} alt='user icon'/>
      <div className='brand-text'><Link to='/cocktails'>TOME</Link></div>
      </div>
      {currentUser ?
        <div className='nav-links'>
          {/* <Link to='/cocktails'>
            <div className='nav-item'>Admin</div>
            </Link>
          <Link to='/cocktails'>
            <div className='nav-item'>Library</div>
            </Link> */}
          
            <Link to='/'>
              <div className='nav-item' onClick={handleLogout}>Log Out</div>
            </Link> 
          <Link to='/cocktails'>
            <img className='nav-icon' src={icon} alt='user icon' />
            </Link>
        </div>
        : null}
        
    </header>
  )
}
