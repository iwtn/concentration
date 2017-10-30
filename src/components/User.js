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
    <text
      x={props.x}
      y={parseInt(props.y, 10) + 40}
      fontFamily="Verdana"
      fontSize="15"
      fill="black"
    >
      {props.user.gotCount / 2}
    </text>
    {( () => {
      if (props.turn) {
        return (
          <circle
            cx={props.x}
            cy={props.y}
            r="10"
            fill={props.color}
            strokeWidth="0"
          />
        )
      }
    })()}
  </g>
)

const UserState = (props) => (
  <g>
    <User
      x="100"
      y="400"
      color="red"
      user={props.users[0]}
      turn={props.currentUser === 'A'}
    />
    <User
      x="700"
      y="400"
      color="blue"
      user={props.users[1]}
      turn={props.currentUser === 'B'}
    />
  </g>
)

export default UserState
