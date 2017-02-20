import React from 'react';
import Piece from './Piece.js'
import './App.css';




const Tile = (props)=>{
  let color = props.tile.color
  console.log(props.tile);
  let piece = ""
  if (props.tile.piece) {
    piece = <Piece piece={props.tile.piece}/>
  }


  return (
    <td className={"Tile " + color } >
      {piece}
    </td>
  )
}





// class Tile extends Component {
//   constructor() {
//     super()
//   }
//   render(){
//
//     return (<td className='Tile'>
//       </td>)
//   }
// }


export default Tile
