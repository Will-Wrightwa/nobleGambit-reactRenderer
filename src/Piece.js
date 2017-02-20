import React from 'react';

import './App.css';




const Piece = (props)=>{
  let img = unicode(props.piece)

  return (
    <h1 className='Piece' piece={props.piece}>{img}</h1>
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



function unicode (piece){
  const _unicode = {
    white:{
      Pawn:"♙",
      Rook:"♖",
      Knight:"♘",
      Bishop:"♗",
      King:"♔",
      Queen:"♕",
    },
    black:{
      Pawn:"♟",
      Rook:"♜",
      Knight:"♞",
      Bishop:"♝",
      King:"♚",
      Queen:"♛",
    }
  }
  return _unicode[piece.player.color][piece.constructor.name]
}



export default Piece
