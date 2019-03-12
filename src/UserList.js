import React from 'react'
function UserList(props) {
  return (
    <div class="div">
    <table class="table" align="center">
      {props.users.map(user => (
        <tbody>{user.userName} played {user.numberOfGames} games. </tbody>
      ))}
    </table>
      <button>Hide/Show number of games played</button>
    </div>
  )
}
      
export default UserList