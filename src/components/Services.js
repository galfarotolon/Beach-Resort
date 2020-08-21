import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem Ipsum'
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: 'Lorem Ipsum'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: 'Lorem Ipsum'
            },
            {
                icon: <FaBeer />,
                title: 'Best Brewed Beer',
                info: 'Lorem Ipsum'
            },
        ]
    }

    render() {
        return (
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
        )
    }
}
