import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

//get unique values for the dropdown menu
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context

    let types = getUnique(rooms, 'type');

    // add the 'all' for first option in dropdown, plus the types
    types = ['all', ...types];

    types = types.map((item, idx) => {
        return <option value={item} key={idx}>{item}</option>
    })



    let guests = getUnique(rooms, 'capacity');

    guests = guests.map((item, idx) => {
        return <option value={item} key={idx}>{item}</option>
    })

    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>Room Type</label>
                    <select name='type' id='type' value={type}
                        className='form-control' onChange={handleChange}>{types}</select>
                </div>
                <div className='form-group'>
                    <label htmlFor='capacity'>Guests</label>
                    <select name='capacity' id='capacity' value={capacity}
                        className='form-control' onChange={handleChange}>{guests}</select>
                </div>


            </form>
        </section>
    )
}

export default RoomsFilter
