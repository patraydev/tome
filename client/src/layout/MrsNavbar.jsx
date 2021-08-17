import { Link } from 'react-router-dom'

import icon from '../assets/images/icon01.png';
import tome from '../assets/images/tome.png';

import '../assets/style/MrsNavbar.css';


export default function MrsNavbar(props) {
  const { currentUser} = props;

  const colorway = currentUser
    ? {
        color: currentUser.foregroundColor,
      }
    : {};

  return (
    <header>
      <div className='brand-box'>
      <img className='brand-icon' src={tome} alt='user icon'/>
      <div className='brand-text'><Link style={colorway} to='/dashboard'>TOME</Link></div>
      </div>
      {currentUser ?
        <div className='nav-links'>
          {currentUser.is_admin ?
            <Link style={colorway} to='/dashboard/admin'>
              <div className='nav-item'>Admin</div>
            </Link>
            : null}
            <Link style={colorway} to='/dashboard/library'>
              <div className='nav-item'>Library</div>
            </Link> 
          <Link style={colorway} to='/dashboard/profile'>
            <img className='nav-icon' src={icon} alt='user icon' />
            </Link>
        </div>
        : null}
        
    </header>
  )
}
