import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'


const bookUrl = 'https://www.googleapis.com/books/v1/volumes/'

const BookInfo = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        try {
            axios.get(`${bookUrl}${id}`)
                .then((response) => {
                    let book = response.data

                    const newBook = {
                        'title': book.volumeInfo.title || "N/A",
                        'authors': book.volumeInfo.authors || "N/A",
                        'publisher': book.volumeInfo.publisher || "N/A",
                        'date': book.volumeInfo.publishedDate || "N/A",
                        'image': typeof book.volumeInfo.imageLinks !== 'undefined' ? book.volumeInfo.imageLinks.thumbnail : '../no-image-available.png',
                        'description': book.volumeInfo.description || "N/A",
                        'pages': book.volumeInfo.pageCount || "N/A",
                        'link': book.volumeInfo.infoLink || "N/A"
                    }
                    setBook(newBook)
                    setLoading(false)
                })

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }, [id])

    if (loading)
        return <Loading />

    if (book) {
        return (

            <div className="bg-white w-full h-full grid place-items-center">
                <div className="flex flex-grow p-20 ">
                    <img className="mr-10 w-40 h-50 shadow-2xl border-black " src={book.image} alt='N/A' />
                    <div className="relative">
                        <h4 ><strong>Title: </strong>  {book.title}  </h4>
                        <h2 > <strong>Author: </strong>{book.authors} </h2>
                        <p > <strong> Publisher : </strong>{book.publisher} </p>
                        <p > <strong> Release year: </strong>   {book.date} </p>
                        <p > <strong> Pages: </strong>  {book.pages} </p>
                        <a href={book.link} className="mt-4 absolute bottom--2 right--6 p-2 bg-green-400  hover:bg-green-600 text-white rounded-3xl text-xl"> Get it </a>
                    </div>



                </div>
                <div>
                    <h1 className='text-4xl mb-5 text-center'><strong>Book description </strong> </h1>
                    {book.description}
                </div>
            </div>


        )
    }

    return (
        <Link to='/error' />
    )

}




export default BookInfo