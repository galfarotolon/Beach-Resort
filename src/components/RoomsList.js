import React from 'react'
import Room from './Room'

function RoomsList({ rooms }) {

    //check if rooms is 0 to return an unsuccessful search message
    if (rooms.length === 0) {
        return (
            <div className='empty-search'>
                <h3>No Rooms Matched Your Search Parameters</h3>
            </div>
        )
    }


    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {
                    rooms.map(room => {

                        return <Room key={room.id} room={room} />

                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
