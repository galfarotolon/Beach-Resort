import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaDumbbell } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Food and Cocktails',
                info: 'Enjoy a cash-free stay at our Beach Resort. All Food and Drinks are included in the Resort Package'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Activities',
                info: 'Rent Jet-Skis or Hike around the grounds and surrounding landscape. Check out our facilities to see everything we have to offer!'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Shuttle service included from the airport to the resort and vice-versa. Book with us up to 24 hours in advance to ensure capacity'
            },
            {
                icon: <FaDumbbell />,
                title: '24 Hour Gym',
                info: 'Our State-of-the-art Gym is opened all day and all night to our guests. You choose when to train'
            },
        ]
    }

    render() {
        return (
            <div id='servicesContainer'>


                <section className='services'>
                    <Title title='services' />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return <article key={index} className='service'>

                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                        }
                    </div>

                </section>
            </div>
        )
    }
}
