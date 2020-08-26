import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'

function Room({ room }) {

    const { name, slug, images, price } = room;


    return (
        <article className='room'>
            <div class="img-container">
                <img src={images[0] || defaultImg} alt="featured room" />
            </div>
        </article>
    )
}

export default Room
