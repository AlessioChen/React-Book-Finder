import React, {  } from 'react'
import { useGlobalContext } from '../context'
import BookCard from './BookCard'
import Loading from './Loading'


const BookList = () => {

    const { books,  loading, } = useGlobalContext()


  
    if(loading){
        return <Loading/>
    }
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-4 ml-2 mt-3'>
            {
                books.map((book, index) => {
                    return <BookCard
                        key={index}
                        id={book.id}
                        image={book.image}
                        title={book.title} />
                })
            }
        </div>

    )
}

export default BookList
