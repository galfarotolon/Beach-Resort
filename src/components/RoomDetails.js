import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'

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


        const [mainImg, ...defaultImg] = images;


        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>
                            Back to Rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">

                    <div className="single-room-images">
                        {defaultImg.map((image, idx) => {
                            return <img key={idx} src={image} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className='desc'>
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: {size} SQ FT</h6>
                            <h6>Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>


                    </div>
                </section>
                <section className='room-extras'>
                    <h6>Extras</h6>
                    <ul className='extras'>
                        {extras.map((extra, idx) => {
                            return <li key={idx}>
                                - {extra}
                            </li>
                        })}
                    </ul>
                </section>

            </>

        )
    }
}
