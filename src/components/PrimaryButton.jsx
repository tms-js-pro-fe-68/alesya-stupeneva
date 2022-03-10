import { useState } from "react";

export default function PrimaryButton() {
  const [color, setColor] = useState('green');
  function clickButton () {
      return (color === 'green' ? setColor('blue'): setColor('green'));
    
  }
  return(
    <button type="button" onClick={() => clickButton()} 
    style={{
        background: color,
        width: '100px',
        margin: '300px',
    }}>Button</button>
  );
}

// return(
//     <button type="button" onClick={() => alert('!!!!')} 
//     style={{
//         width: '100px',
//         background: 'green',
//         color: 'white',
//     }}>Button</button>
//   );