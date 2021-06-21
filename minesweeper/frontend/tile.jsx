import React from 'react'
const Minesweeper = require('../minesweeper.js')

class Tile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tile: props.tile,
      updateGame: props.update,
      key: props.cat
    }
    // this.altHeld = false
    
  }

  handleClick(){
    this.state.updateGame(this.state.tile)
  }

  render() {
    let tile = this.state.tile
    if (!tile.explored){
      if (!tile.flagged){
        return(
          <div onClick={this.handleClick.bind(this)} id={this.state.key} className="unexplored"></div>
        )
      }else{
        return(
          <div id={this.state.key} className="flagged">F</div>
        )
      }
    }else{
      if (!tile.bombed){
        if (tile.adjacentBombCount() > 0){
          return <div id={this.state.key} className="revealed">{tile.adjacentBombCount()}</div>
        }else{
          return <div id={this.state.key} className="revealed"> </div>
        }
      }else{
        return <div id={this.state.key} className="bombed">B</div>
      }
    }
  }
}

export default Tile