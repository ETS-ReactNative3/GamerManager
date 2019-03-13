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
  {name: 'Burak', surname: 'Kalafat', username: 'KaRaMbA', numberOfGames: 3},
  {name: 'Hasan', surname: 'Şahin', username: 'Maniac', numberOfGames: 9},
  {name: 'Kadir', surname: 'Çepni', username: 'Desperado', numberOfGames: 4},
  {name: 'İsmailcan', surname: 'Sarıkoç', username: 'ican', numberOfGames: 7},
  {name: 'Abdulkadir', surname: 'Sarıkoç', username: 'bylaz', numberOfGames: 8},
  {name: 'Abdurrahman', surname: 'Köken', username: 'aakoken', numberOfGames: 6}
];

export default App;
