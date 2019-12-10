import React from 'react';
import axios from 'axios';

class SearchCity extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          loading: false
      }
      this.onSearchCityCallback = props.callback;
      this.onSearchFailedCallback = props.failedcallback;
      this.onSearchCity = this.onSearchCity.bind(this);
    }
  
    onSearchCity(event) {
      event.preventDefault();
      this.setState({loading: true});
      const city = this.refs.city_name.value;
      const link = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=05508bb378ad891b493b0c886cca7a57' + '&units=metric';
      console.log(link);
  
      axios.get(link)
        .then(res => {
          const data = res.data;
          console.log(data);
          
          this.onSearchCityCallback(data);
          this.setState({loading: false});
        })
        .catch(err => {
          console.log(err)
  
          this.onSearchFailedCallback();
          this.setState({loading: false});
        });
    }
  
    render() {
      console.log('redraw show')
      const waiting= (this.state.loading)? <p>Waiting...</p> : " ";
      return <div>
        <form onSubmit={this.onSearchCity}>
          <input className="form-control mb-3" ref='city_name' placeholder='City'/>
          <button className="btn btn-danger mb-3">Show</button>
          {waiting}
        </form>
      </div>
    }
  }
  export default SearchCity;