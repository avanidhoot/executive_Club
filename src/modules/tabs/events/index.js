import React, { Component } from 'react';
import EventComponent from './events';
import programService from "../programs/service";

class Events extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <EventComponent/>
        );
    }
}

export default Events;