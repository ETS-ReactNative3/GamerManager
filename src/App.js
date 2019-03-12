import React, { Component } from 'react';
import './App.css';
import UserManager from './UserManager';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserManager users = {USERS} />
      </div>
    );
  }
}

const USERS = [
  {name: 'Burak', surname: 'Kalafat', userName: 'KaRaMbA', numberOfGames: 3},
  {name: 'Hasan', surname: 'Şahin', userName: 'Maniac', numberOfGames: 9},
  {name: 'Kadir', surname: 'Çepni', userName: 'Desperado', numberOfGames: 4},
  {name: 'İsmailcan', surname: 'Sarıkoç', userName: 'ican', numberOfGames: 7},
  {name: 'Abdulkadir', surname: 'Sarıkoç', userName: 'bylaz', numberOfGames: 8},
  {name: 'Abdurrahman', surname: 'Köken', userName: 'aakoken', numberOfGames: 6}
];

export default App;
