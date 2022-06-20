import Gif from "./Gif";
import './GifList.css'

export default function GifList({gifs}) {
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