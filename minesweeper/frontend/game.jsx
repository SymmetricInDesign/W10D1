import React from 'react'
import Board from './board'
const Minesweeper = require('../minesweeper.js')

class Game extends React.Component {
  // debugger
  constructor(props) {
    // debugger
    super(props)
    this.state = {
      board: new Minesweeper.Board(9, 9)
    }
    this.updateGame = this.updateGame.bind(this)
    this.render = this.render.bind(this)
    this.altToggle = this.altToggle.bind(this)
    this.altHeld = false
  }

  componentDidMount(){
    document.addEventListener('keydown', this.altToggle, false)
    document.addEventListener('keyup', this.altToggle, false)
  }

  altToggle(e){
    console.log(e)
    if (e.keyCode == 16){
      if (!this.altHeld){
        this.altHeld = true
      }else{
        this.altHeld = false
      }
    }
    // console.log(this.altHeld)
  }

  restartGame(){
    this.setState({board: new Minesweeper.Board(9,9)})
  }

  updateGame(tile) {
    console.log(this.altHeld)
    

    if (this.altHeld) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }
    
    this.setState({ board: this.state.board })

    // if (this.state.board.won()) {
    //   alert('you won!')
    // } else if (this.state.board.lost()) {
    //   alert('you lost!')
    // }
  }

  render() {
    if (!this.state.board.won() && !this.state.board.lost() ){
      return (
        <div>
          <p>Shift-click to flag a tile</p>
          <Board board = {this.state.board} updateGame = {this.updateGame} />
        </div>
      )
    }else{
      return (
        <div>
          <div className="modal">
            <section className="modal-screen"></section>
            <section className="modal-form" >
              {/* <div className="close js-modal-close">&times;</div> */}
              <p>You {this.state.board.won() ? "Win" : "Lose"}</p>
              <button onClick={this.restartGame.bind(this)}>Restart</button>
            </section>
          </div>

          <p>Shift-click to flag a tile</p>
          <Board board = {this.state.board} updateGame = {this.updateGame} />
        </div>
        
      )
    }
  }
}

export default Game