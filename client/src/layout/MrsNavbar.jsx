import { Link } from 'react-router-dom'

export default function MrsNavbar(props) {
  const { currentUser, handleLogout } = props;
  
  return (
    <header>
      <h1><Link to='/'>TOME</Link></h1>
    </header>
  )
}