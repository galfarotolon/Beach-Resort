import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'

export default class RoomDetails extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg
        };
    }

    static contextType = RoomContext;

    //compontent 
    componentDidMount() {

    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug)
        //change this to if(loading) when grabbing from API
        if (!room) {
            return <div class="error"><h3>This room couldn't be found</h3>
                <Link to='/rooms' className='btn-primary'>Back To Rooms</Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast,
            pets, images } = room
        return <Hero hero='roomsHero'>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms
                </Link>
            </Banner>

        </Hero>
    }
}
