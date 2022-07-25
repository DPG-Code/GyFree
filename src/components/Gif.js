import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif ({title, id, url}) {
    return (
        <Link className='Gif' to={`/gif/${id}`}>
            <span>{title}</span>
            <img src={url} alt={title}/>
        </Link>
    )
}

export default React.memo(Gif)