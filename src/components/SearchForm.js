import React, { useState } from "react"

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ keyword })
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Buscar gifs"/>
        </form>
    )
}

export default React.memo(SearchForm)