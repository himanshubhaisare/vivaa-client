import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/appointments.scss';

class Appointments extends Component {

  static propTypes = {
    physicianId: PropTypes.number,
    name: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      appointments: null
    }
  };

  componentDidMount = async () => {
    const { physicianId } = this.props;
    if (physicianId != null) {
      const appointments = await fetch(`http://localhost:4000/physicians/${physicianId}/appointments`)
        .then(res => res.json());
      this.setState({ appointments })
    }
  };

  componentWillReceiveProps = async (nextProps) => {
    const { physicianId } = nextProps;
    if (physicianId != null) {
      const appointments = await fetch(`http://localhost:4000/physicians/${physicianId}/appointments`)
        .then(res => res.json());
      this.setState({ appointments })
    }
  };

  render() {
    const { appointments } = this.state;
    const {name} = this.props;

    return (
      <div className="appointments col">
        <div className="physician-name"> {name} </div>
        <div className="headers row"> 
          <div className="col"> # </div>
          <div className="col"> Name </div>
          <div className="col"> Time </div>
          <div className="col"> Type </div>
        </div>
        {appointments && appointments.map((appointment, i) => {
          return (
            <div className="appointment row" key={i}>
              <div className="col"> {i+1} </div>
              <div className="col"> {appointment.name} </div>
              <div className="col"> {appointment.time} </div>
              <div className="col"> {appointment.type} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Appointments;