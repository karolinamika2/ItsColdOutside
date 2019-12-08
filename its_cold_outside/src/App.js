import React from 'react';
import axios from 'axios';
import './App.css';

class ViewWeather extends React.Component {
  render() { 
    console.log('redraw view', this.props)
    return this.props.failed ?
      "No city with that name!" :
      this.props.loaded ?
        (<div>
          <p>City name: {this.props.data.name}</p>
          <p>Coords: {this.props.data.coord.lat} {this.props.data.coord.lon}</p>
          <p>Temperature: {this.props.data.main.temp}</p>
          <p>Temperature min.: {this.props.data.main.temp_min}</p>
          <p>Temperature max.: {this.props.data.main.temp_max}</p>
          <p>Humidity: {this.props.data.main.humidity}</p>
          <p>Pressure: {this.props.data.main.pressure}</p>
          <p>Wind: {this.props.data.wind.speed}</p>
        </div>) :
        'Waiting...';
  }
}

class SearchCity extends React.Component {
  constructor(props) {
    super(props)
    this.onSearchCityCallback = props.callback;
    this.onSearchFailedCallback = props.failedcallback;
    this.onSearchCity = this.onSearchCity.bind(this);
  }

  onSearchCity(event) {
    event.preventDefault();

    const city = this.refs.city_name.value;
    const link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=05508bb378ad891b493b0c886cca7a57' + '&units=metric';
    console.log(link);

    axios.get(link)
      .then(res => {
        const data = res.data;
        console.log(data);
        
        this.onSearchCityCallback(data);
      })
      .catch(err => {
        console.log(err)

        this.onSearchFailedCallback();
      });
  }

  render() {
    console.log('redraw show')

    return <div>
      <form onSubmit={this.onSearchCity}>
        <input ref='city_name' placeholder='City'/>
        <button>Show</button>
      </form>
    </div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: {},
      loaded: false,
      failed: false
    };
    this.onSearchFailed = this.onSearchFailed.bind(this);
    this.onDataReceived = this.onDataReceived.bind(this);
  }

  onSearchFailed() {
    this.setState({failed: true});

    console.log('search failed', this.state.meta, this.state.loaded)
  }

  onDataReceived(props) {
    this.setState({failed: false});
    this.setState({meta: props});
    this.setState({loaded: true});

    console.log('data received', this.state.meta, this.state.loaded)
  }

  render () {
    console.log('redraw parent')

    return (
      <div>
        <SearchCity callback={this.onDataReceived} failedcallback={this.onSearchFailed}/>
        <ViewWeather data={this.state.meta} loaded={this.state.loaded} failed={this.state.failed}/>
      </div>
    );
  }
}

export default App;

