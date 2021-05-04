import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [books, setBooks] = useState([])
 


    const url = 'https://www.googleapis.com/books/v1/volumes?q='

    const clearBooks = () =>{
        setBooks([])
    }

    const fetchBooks = () => {
        setLoading(true)
        try {
            axios.get(`${url}${searchTerm}&maxResults=40`)
                .then(response => {

                    const tempBooks = response.data.items
                    const newBooks = tempBooks.map((book) => {
                        const { volumeInfo } = book
                        return {
                            'title': volumeInfo.title,
                            'image': typeof volumeInfo.imageLinks !== 'undefined' ? volumeInfo.imageLinks.thumbnail : '../no-image-available.png',
                            'id': book.id
                        }
                    })
                    setBooks(newBooks)
                    setLoading(false)
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


   
    return (

        <AppContext.Provider
            value={{
                books,
                setSearchTerm,
                fetchBooks,
                clearBooks, 
                loading,
    
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