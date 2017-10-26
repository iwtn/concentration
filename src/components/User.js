import React from 'react';

const User = (props) => (
  <g>
    <circle
      cx={props.x}
      cy={props.y}
      r="15"
      fill="white"
      strokeWidth="3"
      stroke={props.color}
    />
    <circle
      cx={props.x}
      cy={props.y}
      r="10"
      fill={props.color}
      strokeWidth="0"
    />
  </g>
)

export default User
