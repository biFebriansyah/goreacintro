import './style.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function Card(props) {
    const [hover, setHover] = useState()
    return (
        <div className="cards">
            <div className={hover ? 'hover show' : 'hide'} />
            <div className="image">
                <img src={props.image} alt={props.name} />
                <p className={hover ? 'chapter zindex' : 'chapter'}>{props.price}</p>
                <p className={hover ? 'read' : 'read hide'}>Add</p>
            </div>
            <Link to={`/detail/${props.id}`}>
                <div className="dsc">
                    <p className="name">{props.name}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card
