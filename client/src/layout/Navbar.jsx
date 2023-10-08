import {
  Nav,
  NavIcon,
  NavBrand,
  NavItems,
  NavItem,
} from '../styled/Navbar';

import icon from '../assets/images/icon01.png';

export default function Navbar({currentUser}) {

  return (
    <Nav>
        <NavIcon to='/dashboard'/>
      <NavBrand to='/dashboard' color={ currentUser.foregroundColor}>TOME</NavBrand>
        {currentUser ?
      <NavItems>
          {currentUser.is_admin ?
            <NavItem to='/dashboard/admin' color={ currentUser.foregroundColor}>
              Admin
            </NavItem>
             : null}
            <NavItem to='/dashboard/library' color={ currentUser.foregroundColor}>Library</NavItem>
      <NavIcon to='/dashboard/profile' src={icon}/>
      </NavItems>
        : null}
      </Nav>
  )
}