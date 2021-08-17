import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import './Splash.css';
import logo from '../images/cthulhu.svg';


function Splash(props) {
  const history = useHistory();

useEffect(() => {
setTimeout(()=>history.push('/home'),3000)
},[]);

  return (
    <div className='container splash'>
        <img src={logo} className='app-logo' alt='badass stevie nix witchy logo' />
  </div>
);
};

export default Splash 