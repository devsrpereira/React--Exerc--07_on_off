import React from 'react'
import box_data from './box_data'
import BoxSquare from './BoxSquare'

export default function Box(){
    const [squares, setSquares] = React.useState(box_data)

    function toggle(id){
        setSquares(prevSquares =>{
            return prevSquares.map((square) =>{
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

        const elemento_criado = squares.map(square => (
       <BoxSquare  
        key = {square.id} 
        on = {square.on}
        toggle = {()=>toggle(square.id)} 
        
        />
    ))
    
    return(
        <main className='box_page'>
            <h1 className='box_title'>Boxes will go here!</h1>
            {elemento_criado}
        </main>
    )
}