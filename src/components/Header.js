import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'
const Header = () => {

    const {clearBooks} = useGlobalContext()

    const handleClick =() =>{
        clearBooks()    
    }
    return (

            <Link to='/' onClick={handleClick}>
                <header className="p-5 text-center bg-gray-700 text-4xl">
                    <h1 className='mx-auto'>📚 Book Finder</h1>
                </header>
            </Link >
    

    )
}

export default Header