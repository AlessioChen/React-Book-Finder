import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState([])

    const url = 'https://www.googleapis.com/books/v1/volumes?q='

    const fetchBooks = () => {
        try {
            axios.get(`${url}${searchTerm}&maxResults=40`)
                .then(response => {

                    const tempBooks = response.data.items
                    const newBooks = tempBooks.map((book) => {
                        const { volumeInfo } = book
                        return {
                            'title': volumeInfo.title,
                            'image': typeof volumeInfo.imageLinks !== 'undefined' ? volumeInfo.imageLinks.thumbnail : '../no-image-available.png',
                        }
                    })
                    setBooks(newBooks)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <AppContext.Provider
            value={{
                books,
                setSearchTerm,
                fetchBooks
            }}
        >
            {children}
        </AppContext.Provider>
    )


}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }