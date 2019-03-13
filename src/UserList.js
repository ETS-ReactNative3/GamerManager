import React from 'react'
function UserList(props) {
  return (
    <div className="div">
    <ol align="center">
      {props.users.map(user => (
        <li key={user.username} >{user.username} played {user.numberOfGames} games. </li>
      ))}
    </ol>
      <button>Hide/Show number of games played</button>
    </div>
  )
}
      
export default UserList