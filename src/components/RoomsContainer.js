import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from '../context'
import Loading from '../components/Loading'

function RoomsContainer({ context }) {

    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>

    )
}

// return (
//     <>
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;

//                     if (loading) {
//                         return <Loading />;
//                     }
//                     return (
//                         <div>
//                             Rooms Container
//                             <RoomsFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }

//         </RoomConsumer>


//     </>
// )


export default withRoomConsumer(RoomsContainer)
