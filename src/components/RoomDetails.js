import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'

export default class RoomDetails extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            roomDetails: this.props.match.params.roomDetails,
            defaultBcg: defaultBcg
        };
    }
    //mount comp
    componentDidMount() {

    }

    render() {
        return (
            <div>
                Room Details Page here
            </div>
        )
    }
}
