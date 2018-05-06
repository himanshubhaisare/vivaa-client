import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/appointments.scss';

class Appointments extends Component {

  static propTypes = {
    physicianId: PropTypes.number
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
    return (
      <ul className="appointments">
        {appointments && appointments.map((appointment, i) => {
          return (<li key={i}>Name : {appointment.name}, </li>);
        })}
      </ul>
    );
  }
}

export default Appointments;