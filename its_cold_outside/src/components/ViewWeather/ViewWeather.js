import React from 'react';

class ViewWeather extends React.Component {
    render() { 
      console.log('redraw view', this.props)
      return this.props.failed ?
        <div className="alert alert-danger">No city with that name!</div> :
        this.props.loaded ?
          (<div className="card">
            <div className="card-body">
                <h4 className="card-title">{this.props.data.name}</h4>
                <p>Coords: {this.props.data.coord.lat} {this.props.data.coord.lon}</p>
                <p>Temperature: {this.props.data.main.temp}</p>
                <p>Temperature min.: {this.props.data.main.temp_min}</p>
                <p>Temperature max.: {this.props.data.main.temp_max}</p>
                <p>Humidity: {this.props.data.main.humidity}</p>
                <p>Pressure: {this.props.data.main.pressure}</p>
                <p>Wind: {this.props.data.wind.speed}</p>
            </div>
          </div>) :
          ' ';
    }
  }
  export default ViewWeather;