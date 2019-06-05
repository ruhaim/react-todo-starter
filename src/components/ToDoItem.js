import React from 'react';

export default(props)=>{
  return(
    <li>
      {props.todo}
      <button>X</button>
    </li>
  )
}