import React from 'react'
import {Link} from 'wouter'
import Fav from './Fav'
import './Gif.css'

function Gif ({title, id, url}) {
    return (
        <div className='gif-container'>
            <Fav id={id}/>
            <Link className='Gif' to={`/gif/${id}`}>
                <span>{title}</span>
                <img src={url} alt={title}/>
            </Link>
        </div>
    )
}

export default React.memo(Gif)