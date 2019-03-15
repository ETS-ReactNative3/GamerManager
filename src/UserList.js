import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserList extends Component {
  state = {
    isHidden : false
  }
  hideShowNumberOfGames = event => {
      if(this.state.isHidden === true) {
        this.setState({ isHidden : false});
   
      }
      else {
        this.setState({ isHidden : true});
      }
    }
  
  render() {
    return (
      <div>
        <div className="div">
        <ol align="center">
          {this.props.users.map(user => (
            <li key={user.username} >{user.username} played {this.state.isHidden ? '/*' : user.numberOfGames} games. </li>
          ))}
        </ol>
          <button onClick={this.hideShowNumberOfGames}>{this.state.isHidden ? 'Show' : 'Hide'} number of games played</button></div>
      </div>
    )
  }
}

UserList.PropTypes = {
  users: PropTypes.array.isRequired
}
      
export default UserList