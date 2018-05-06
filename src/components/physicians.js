import React, { Component } from 'react';
import '../styles/physicians.scss';
import fetch from 'node-fetch';
import Appointments from '../components/appointments';

class Physicians extends Component {

    constructor(props) {
        super(props);
        this.state = {
            physicians: null,
            physicianId: null
        }
    };

    componentDidMount = async () => {
        const physicians = await fetch('http://localhost:4000/physicians')
            .then(res => res.json());
        this.setState({ physicians });
    };

    goToAppointments = (e) => {
        e.preventDefault();
        const physicianId = e.target.value;
        if (physicianId !== null && physicianId !== undefined) {
            this.setState({physicianId});
        }
    };

    renderPhysicians = () => {
        const { physicians } = this.state;
        return (
            <div className="physicians">
                <div className="header"> physicians </div>
                <ul className="physicians-list">
                    {physicians && physicians.map((physician) => {
                        return (
                            <li 
                                key={physician.id} 
                                onClick={this.goToAppointments} 
                                value={physician.id}> 
                                {physician.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    render() {
        const { physicianId } = this.state;
        return (
            <div className="container row">
                {this.renderPhysicians()}
                {<Appointments {...{physicianId}} />}
            </div>
        );
    }
}

export default Physicians;