import React from 'react'
import { useGlobalContext } from '../context'

const SearchArea = () => {

    const { setSearchTerm, fetchBooks } = useGlobalContext()

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchBooks()
    }

    return (

        <div className="text-center bg-gray-200 p-5 mt-3">
            <form onSubmit={handleSubmit}>
                <input onChange={handleSearch} name='searchText' className="p-2" type="text" placeholder="🔍 Search Book...." />
                <button type='submit' className="bg-blue-400 rounded-3xl text-center p-2 ml-2 text-white hover:bg-blue-900">search</button>
            </form>
        </div>

    )
}

export default SearchArea