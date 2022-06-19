import Gif from "./Gif";

export default function GifList({gifs}) {
    return (
        <div>
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
        </div>
    )
}