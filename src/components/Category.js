import { Link } from "wouter"
import './Category.css'

export default function Category({ name, options = [] }){
    return (
        <>
            <h3>{name}</h3>
            <ul>
                {
                options.map((singleOption, index) => (
                <li key={singleOption} index={index} type='primary'>
                    <Link to={`/search/${singleOption}`}>
                        {singleOption}
                    </Link>
                </li>
                ))
                }
            </ul>
        </>
    )
}