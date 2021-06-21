import React from 'react'
const Minesweeper = require('../minesweeper.js')

class Board extends React.Components {
  render() {
    return (
      this.props.board.map((el, idx) => {
        <div> 
        {el.map((tile) => {
          return <Tile tile={tile} update={this.props.updateGame} />
        })}
        </div>
      })
    )
  }
}

export default Board
