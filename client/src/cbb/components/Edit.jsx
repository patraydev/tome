import CockForm from './CockForm'; 

function Edit(props) {


  const handleClick = (e) => {
    e.preventDefault();
    const target = props.beautifulDict.find(el => el[0].name === e.target.innerHTML);
    props.setRecord(target[0]);
}


  return (
    <div className='container'>
    <div className='row'>
      <div className='col'>
          <CockForm record={props.record} editMode={true} beautifulDict={props.beautifulDict} setToggle={props.setToggle}/>
      </div>
        <div className='col'>
          <div className="build-display">
            {/* search bar might be nice here */}
            {props.record ? Object.keys(props.record).map((key, index) => (
          <p key={index}>{key === 'ingredients' ? props.record[key].map((ing) => (<p>{ing}</p>) ) :
          props.record[key] }</p>
        ))
        
        : 'ᕋᐃᔭᓐ ᕙᓛᓇᒐᓐ ᐅᓪᓗᒥ ᐃᓕᖅᑯᓯᕆᖕᒪᒍ, ᓴᓇᔨᓪᓚᕆᐊᓗᒃ ᓂᕆᑎᑦᑎᔪᓐᓇᖅᑐᖅ ᐅᑕᖅᑭᔪᓂᒃ ᑲᑎᙵᔪᓂᒃ ᐱᐅᔪᒻᒪᕆᐊᓗᖕᒥᒃ ᒪᕐᕋᕐᒥᒃ, ᐊᒻᒪ ᐊᑕᐅᑦᑎᒃᑯᑦ ᓴᖅᑭᑎᑦᑎᓪᓗᓂ ᑕᐅᑐᖅᑰᖅᑕᒥᓂᒃ ᓄᓇᕐᔪᐊᕐᒥ. ᖃᓄᐃᒻᒪᑦ ᐃᖅᑲᓇᐃᔭᙱᓚᖅ, ᓱᕋᒃᓯᒪᕙ ᐃᓄᑑᓪᓗᓂᓗ? ᐳᕋᐃᔭᓐ ᑎᓯᔪᖅ ᒫᑕᓐ ᐊᓐᓄᕌᓕᐊᕆᓪᓗᓂᐅᒃ ᑲᓇᖕᓇᖅᐸᓯᖕᒥᐅᑕᖅ'}
      </div>
        </div>
      </div>
      </div>
    
    
    
    
    );
    
  };
  
export default Edit;