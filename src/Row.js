import React from 'react';
import Tile from './Tile.js'
import './App.css';



const Row = (props)=>{
  const tiles = props.tiles.map((tile)=>{
    return (<Tile tile={tile}/>)
  })
  return (
    <tr className='Row'>
    {tiles}
    </tr>
  )
}

// class Row extends Component {
//   constructor() {
//     super()
//   }
//   render(){
//
//     return (<tr className='row'>
//       </tr>)
//   }
// }


export default Row
