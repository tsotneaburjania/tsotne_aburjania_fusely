import React from 'react'
import "../styles/ButtonWhite.scss"

function ButtonWhite(props) {
    return (
        <button className="buttonWhite">{props.text}</button>
    )
}

export default ButtonWhite
