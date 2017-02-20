
import React from 'react';
import Row from './Row.js'
import './App.css';
import BoardModel from '../../nobleGambit.js/app/Board.js'
import PlayerModel from '../../nobleGambit.js/app/Player.js'


const Board = ()=>{
   let b = new BoardModel()
   let p1 = new PlayerModel('fred','white')
   let p2 = new PlayerModel('joe','black')
   b.init(p1,p2)
  const rows = b.map((row)=>{
    return <Row tiles={row}/>
  })
  return (
    <tbody className='Board center'>
    {rows}
    </tbody>
  )
}

// class Board extends Component {
//   constructor(props) {
//     super()
//
//     let b = new BoardModel()
//     // let p1 = new Player("white")
//     // let p2 = new Player("black")
//     // b.init
//
//     this.state = b
//
//
//   }
//   render(){
//
//     return (<tbody className='board'>
//
//
//       </tbody>)
//   }
// }

export default Board
