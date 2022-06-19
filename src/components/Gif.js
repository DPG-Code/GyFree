import {Link} from 'wouter'

export default function Gif ({title, id, url}) {
    return (
        <Link to={`/gif/${id}`}>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </Link>
    )
}