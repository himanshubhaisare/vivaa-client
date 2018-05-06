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
        this.setState({physicians})
        console.log(physicians);
    };

    render() {
        const {physicians} = this.state;
        return (
            <div className="physicians">
            {physicians && physicians.map( physician => {
                return (<h5>Name : {physician.name}</h5>);
            })}
            </div>
        );
    }
  }
  
export default Physicians;