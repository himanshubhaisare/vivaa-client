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
      appointments: null,
      name: null,
      time: null,
      type: null
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

  deleteAppointment = async (e) => {
    const id = e.currentTarget.value;
    const {physicianId} = this.props;
    if (id != null) {
      await fetch(`http://localhost:4000/physicians/${physicianId}/appointments/${id}`, {method: 'delete'})
      const appointments = await fetch(`http://localhost:4000/physicians/${physicianId}/appointments`)
        .then(res => res.json());
      this.setState({ appointments })
    }
  }

  setName = (e) => {
    const name = e.currentTarget.value;
    this.setState({name});
  }

  setTime = (e) => {
    const time = e.currentTarget.value;
    this.setState({time});
  }

  setType = (e) => {
    const type = e.currentTarget.value;
    this.setState({type});
  }

  addAppointment = async () => {
    const {name, time, type} = this.state;
    const {physicianId} = this.props;
    await fetch(`http://localhost:4000/physicians/${physicianId}/appointments`, {
      method: 'post',
      body: {name, time, type}});

    const appointments = await fetch(`http://localhost:4000/physicians/${physicianId}/appointments`)
      .then(res => res.json());
    this.setState({ appointments })
  }

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
          <div className="col"/>
        </div>
        {appointments && appointments.map((appointment, i) => {
          return (
            <div className="appointment row" key={i}>
              <div className="col"> {i+1} </div>
              <div className="col"> {appointment.name} </div>
              <div className="col"> {appointment.time} </div>
              <div className="col"> {appointment.type} </div>
              <button 
                className="col" 
                name="delete" 
                type="button" 
                value={appointment.id} 
                onClick={this.deleteAppointment}> Delete 
              </button>
            </div>
          );
        })}
        <div className="appointment row" key={999}>
              <div className="col"> {999} </div>
              <div className="col"> <input type="text" placeholder="name" onChange={this.setName} /> </div>
              <div className="col"> <input type="text" placeholder="time" onChange={this.setTime} /> </div>
              <div className="col"> <input type="text" placeholder="type" onChange={this.setType} /> </div>
              <button 
                className="col" 
                name="add" 
                type="button" 
                value={999} 
                onClick={this.addAppointment}> Add 
              </button>
            </div>
      </div>
    );
  }
}

export default Appointments;