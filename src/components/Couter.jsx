// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(5);

//   return (
//     <>
//       <p>Rating {count} Star</p>
//       <button type="button" class="btn btn-success"onClick={() => setCount(count >=10 ? "" : count +1)}>On Click</button>
//       <button type="button" class="btn btn-danger"onClick={() => setCount(count -1)}>On Click</button>
//       <button type="button" class="btn btn-warning" onClick={() => setCount(0)}>On Click</button>
//     </>
//   );
// }

// export default Counter;

import React, { useState } from 'react';

function Counter() {
  const [bgColor] = useState('green');

  return (
    <div style={{ backgroundColor: bgColor }}>
      <button>On click</button>
    </div>
  );
}
export default Counter;