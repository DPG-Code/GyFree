import Gif from "./Gif";
import './ListOfGifs.css'

export default function ListOfGifs({gifs}) {
    return (
        <section className="gifs">
            {
            gifs.map(({id, title, url}) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
            }
        </section>
    )
}