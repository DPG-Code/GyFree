import React from "react"
import { useCallback } from "react"
import { useLocation } from "wouter"
import useForm from "./useForm"
import './SearchForm.css'


const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
    const [, pushLocation] = useLocation()

    const {keyword, rating, times, updateKeyword, updateRating} = useForm({ initialKeyword, initialRating })

    const handleChange = (e) => {
        updateKeyword(e.target.value)
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }, [pushLocation, keyword, rating])

    const handleChangeRating = (e) => {
        updateRating(e.target.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Buscar gifs"/>
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating:</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <button>Search</button>
        </form>
    )
}

export default React.memo(SearchForm)