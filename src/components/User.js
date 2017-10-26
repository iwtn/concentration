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

const UserState = (props) => {
  return (
    <g>
      <User
        x="100"
        y="400"
        color="red"
        turn={props.currentUser === 'A'}
      />
      <User
        x="700"
        y="400"
        color="blue"
        turn={props.currentUser === 'B'}
      />
    </g>
  )
}

export default UserState
