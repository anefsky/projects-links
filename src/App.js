import React, {Component} from 'react';
import './App.scss';
import DisplayLinks from './components/DisplayLinks';
import listings from './assets/ProjectItems';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      listings: listings
    }
  }
  
  render() {
    return (
      <div className="App">
        <DisplayLinks
          data = {this.state.listings}
        >
        </DisplayLinks>
      </div>
    );
  }
}

export default App;
