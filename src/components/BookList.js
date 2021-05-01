import React from 'react'
import { useGlobalContext } from '../context'
import BookCard from './BookCard'


const BookList = () => {

    const { books } = useGlobalContext()


    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 ml-2 mt-3'>
            {
                books.map((book, index) => {
                    return <BookCard
                        key={index}
                        image={book.image}
                        title={book.title} />
                })
            }
        </div>

    )
}

export default BookList
