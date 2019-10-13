import React, { Component } from 'react';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      show: false
    };
  }
  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    });
  };
  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };
    playerName === ''
      ? alert('Please enter player name!')
      : this.setState({
          players: [...this.state.players, newPlayer],
          show: true
        });
  };

  onPlayerRemove = playerIndex => {
    this.setState({
      players: this.state.players.filter(
        (player, index) => index !== playerIndex
      )
    });
  };

  render() {
    return (
      <div className='App'>
        <h1 className='App__title'>Scorekeeper React App</h1>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        {this.state.show ? (
          <PlayersList
            players={this.state.players}
            onScoreUpdate={this.onScoreUpdate}
            onPlayerRemove={this.onPlayerRemove}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
