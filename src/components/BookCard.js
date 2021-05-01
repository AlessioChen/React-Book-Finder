import React, { } from 'react'


const bookCard = (props) => {

    const { image, title, } = props

    return (
        <div className="flex flex-col items-center border-4 mb-3 p-3 mr-2 bg-light-blue-200">
            <h3 className="text-2xl flex-grow"><strong> {title} </strong> </h3>
            <img className="w-40 h-40 flex-grow" src={image} alt='Not available..' />

            <button className="flex-grow-no mt-3 bg-blue-400 hover:bg-blue-900 text-white rounded-full text-base text p-2 mb-2 "> More Information</button>
        </div>

    )

}

export default bookCard