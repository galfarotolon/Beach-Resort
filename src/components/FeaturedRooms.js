import React, { Component } from 'react'
import { RoomContext } from '../context'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'


export default class FeaturedRooms extends Component {

    static contextType = RoomContext


    render() {

        let { loading, featuredRooms: rooms } = this.context
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />
        })


        return (
            <section className='featured-rooms'>
                <Title title='featured rooms' />
                <div class="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
                <Link to='/rooms' className='btn-primary center'>
                    View All Rooms
                    </Link>
            </section>
        )
    }
}
