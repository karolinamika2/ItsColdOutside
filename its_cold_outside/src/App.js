import React from 'react';
import ViewWeather from './components/ViewWeather/ViewWeather';
import SearchCity from './components/SearchCity/SearchCity';
import './App.css';

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
    this.setState({failed: false, meta: props, loaded: true});
    console.log('data received', this.state.meta, this.state.loaded)
  }

  render () {
    console.log('redraw parent')

    return (
      <div className="App">
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="panel">
              <SearchCity callback={this.onDataReceived} failedcallback={this.onSearchFailed}/>
              <ViewWeather data={this.state.meta} loaded={this.state.loaded} failed={this.state.failed}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

