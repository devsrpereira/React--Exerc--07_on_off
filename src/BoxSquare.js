import React from 'react'

export default function BoxSquare(props){

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        cursor: "pointer",
    }
    
    return(
        <div 
            style={styles} 
            className='botao' 
            onClick={props.toggle}
        >
        </div>
    )
}
