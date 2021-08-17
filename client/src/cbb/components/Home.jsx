import { useHistory } from 'react-router-dom';

import './Home.css';

function Home(props) {
  const history = useHistory();

  const handleClick = (e) => {
    props.setActiveTable(e.target.innerHTML);
    history.push('/beatuifier');
}

  return (
    <div className='two-col-container'>
    <div className='thumbnail-container'>
    <h3>select table to beautify</h3>
    {props.tables.map((table) => (
      <div className='menu-thumbnail' key={table} onClick={handleClick}>{table}</div>
    ))}
      </div>
      <div className='build-display'>
        <h3>last beautified:</h3>
        {props.record ? Object.keys(props.record).map((key, index) => (
          <p key={index}>{key === 'ingredients' ? props.record[key].map((ing) => (<p key={ing}>{ing}</p>) ) :
             props.record[key] }</p>
        ))
        
        : 'ᕋᐃᔭᓐ ᕙᓛᓇᒐᓐ ᐅᓪᓗᒥ ᐃᓕᖅᑯᓯᕆᖕᒪᒍ, ᓴᓇᔨᓪᓚᕆᐊᓗᒃ ᓂᕆᑎᑦᑎᔪᓐᓇᖅᑐᖅ ᐅᑕᖅᑭᔪᓂᒃ ᑲᑎᙵᔪᓂᒃ ᐱᐅᔪᒻᒪᕆᐊᓗᖕᒥᒃ ᒪᕐᕋᕐᒥᒃ, ᐊᒻᒪ ᐊᑕᐅᑦᑎᒃᑯᑦ ᓴᖅᑭᑎᑦᑎᓪᓗᓂ ᑕᐅᑐᖅᑰᖅᑕᒥᓂᒃ ᓄᓇᕐᔪᐊᕐᒥ. ᖃᓄᐃᒻᒪᑦ ᐃᖅᑲᓇᐃᔭᙱᓚᖅ, ᓱᕋᒃᓯᒪᕙ ᐃᓄᑑᓪᓗᓂᓗ? ᐳᕋᐃᔭᓐ ᑎᓯᔪᖅ ᒫᑕᓐ ᐊᓐᓄᕌᓕᐊᕆᓪᓗᓂᐅᒃ ᑲᓇᖕᓇᖅᐸᓯᖕᒥᐅᑕᖅ'}
      </div>
    </div>
);
};

export default Home