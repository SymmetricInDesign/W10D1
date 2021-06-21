import React from 'react'
import Tile from './tile'
const Minesweeper = require('../minesweeper.js')

class Board extends React.Component {
  constructor(props){
    // debugger
    super(props)
    this.state = {
      board: props.board,
      updateGame: props.updateGame
    }
    this.altHeld = false
    // this.altToggle = this.altToggle.bind(this)
  }

  

  render() {
    console.log(this.state)
    let tiles = this.state.board.grid.map((el, idx1) => {
      {return (
        <div className="row">
            {el.map((tile, idx2) => {
              return <Tile cat={[idx1,idx2]} tile={tile} update={this.state.updateGame} />
            })}
        </div>
      )
    }
  
    })
    console.log(tiles)

    return (
      <div className="board">
        {tiles}
      </div>
    )
  }
}

export default Board
