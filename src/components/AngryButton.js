import {useState} from 'react';

function AngryButton() {
  const [anger, setAnger] = useState(0);
  const handleClick = () => setAnger(anger < 1 ? anger + 0.1 : 0);

  return (
    <button className="AngryButton" onClick={handleClick}  style={ {backgroundColor: `rgba(255,0,0,${anger})`} }>
    {anger < 1 && <span>Don't click me too much! </span>}
    {anger > 1 && <span>Rawr!</span>}
    </button>
  );
}

export default AngryButton;
