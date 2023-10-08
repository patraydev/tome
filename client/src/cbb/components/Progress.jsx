import { useHistory } from 'react-router-dom';


function Progress(props) {
  const history = useHistory();

  const handleClick = (e) => {
    const target = props.beautifulDict.find(el => el[0].name === e.target.innerHTML);
    props.setRecord(target[0]);
    history.push('/edit')
}

  if (props.beautifulDict.length !== 0) {
    return (
      <div className="two-col-container" style={{textAlign:'center'}}>
        <div className="cock-list">
          <h2>beautified:</h2>
          {props.beautifulDict.map((obj) => (
            <p style={{fontSize:'2em',fontWeight:'2em'}} key={obj[1].id} onClick={handleClick}>{obj[0].name ? obj[0].name : " "}</p>
          ))}
        </div>
        <div>
        <h2>builds beautified:</h2>
          <div style={{fontSize:'13em'}}>{props.beautifulDict.length}</div>
          </div>
      </div>
    );
  } else return (<h2>ᐃᓕᐅᖅᑲᐃᓂᖅ...</h2>);
}

export default Progress;
