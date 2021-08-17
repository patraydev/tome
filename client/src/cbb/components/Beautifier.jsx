import { useState } from "react";

import trash from '../images/trash128.png';
import CockForm from "./CockForm";

function Beautifier(props) {
  const [last, setLast] = useState({});
  const [dragged, setDragged] = useState([]);
  const [active, setActive] = useState({});

  const handleDragStart = (event,content) => {
    event.dataTransfer.setData("content", content);
    event.target.style.color = 'white';
    setDragged(curr => [...curr, event.target]);
    setActive(event.target);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    active.style.display = 'none';
  };

  return (
    <div className='two-col-container'>
        <div className='col'>
        <CockForm setLast={setLast} setToggle={props.setToggle} dragged={dragged} setDragged={ setDragged}/>
        </div>
        <div className='col'>
          <div className="cock-list">
          <div className='top'>
            <span style={{ fontSize: '1.8em', padding: '8px' }}>Last Beautified:{props.record ? ` ${props.record.name}` : 'ᐃᓕᐅᖅᑲᐃᓂᖅ...'}</span> 
            {/* {last.name ? ` ${last.name}` : ""}*/}
            <img className='trash' style={{maxWidth:'64px',maxHeight:'64px',position:"fixed",bottom:'5px',right:'5px'}} src={trash} alt='windows XP style trash can' onDrop={handleDrop} onDragOver={handleDragOver}/>
          </div>
      
          {props.raw.map((obj) => (
            obj.fields[props.table] ?
              <p
                key={obj.id}
                onDragStart={(e) => handleDragStart(e, obj.fields[props.table])}
                onDragOver={handleDragOver}
                draggable
              >
                {obj.fields[props.table] !== '' ? obj.fields[props.table] : null}
              </p> : null)
          )}
          {/* <button onClick={getMore}>more</button> */}
          </div>
        </div>
      </div>
  );
}

export default Beautifier;
