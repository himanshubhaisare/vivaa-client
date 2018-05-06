import React, { Component } from 'react';
import '../styles/physicians.scss';
import fetch from 'node-fetch';

class Physicians extends Component {

    constructor(props) {
        super(props);
        this.state = {
            physicians: null
        }
    };

    componentDidMount = async () => {
        const physicians = await fetch('http://localhost:4000/physicians')
            .then(res => res.json());
        this.setState({ physicians });
    };

    render() {
        const { physicians } = this.state;
        return (
            <div className="physicians">
                {physicians && physicians.map((physician, i) => {
                    return (<div key={i}> Name : {physician.name}</div>);
                })}
            </div>
        );
    }
}

export default Physicians;