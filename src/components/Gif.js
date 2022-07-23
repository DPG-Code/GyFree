import {Link} from 'wouter'
import './Gif.css'

export default function Gif ({title, id, url}) {
    return (
        <Link className='Gif' to={`/gif/${id}`}>
            <span>{title}</span>
            <img src={url} alt={title}/>
        </Link>
    )
}