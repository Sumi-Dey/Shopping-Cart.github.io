import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating,onClick,style }) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <span key={index} onClick= {()=>onClick(index)} style={style} >
                    {
                        rating > index ? (<AiFillStar fontSize="20px" />) : (<AiOutlineStar fontSize="20px" />)
                    }
                </span>
            ))}
        </>
    )
}

export default Rating
