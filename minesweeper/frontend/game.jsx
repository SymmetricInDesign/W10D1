import React from 'react'
const Minesweeper = require('../minesweeper.js')

class Game extends React.Component {
  // debugger
  constructor(props) {
    debugger
    super(props)
    this.state = {
      board: new Minesweeper.Board()
      
    }
    this.updateGame = this.updateGame.bind(this)
    this.render = this.render.bind(this)
  }

  updateGame() {

  }

  render() {
    return (
      <Board board = {this.state.board} updateGame = {this.updateGame} />
    )
  }
}

export default Game