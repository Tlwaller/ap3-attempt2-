import React , {Component} from 'react';
//components
import Header from './Components/Header';
import Card from './Components/Card';
import Data from './Components/Data';
//styling
var body = {
  backgroundColor: 'rgb(48, 48, 48)',
  height: '100vh',
  width: '100vw'
}

class App extends Component {
  constructor(){
    super();
      this.state = {
      }
    }
    render() {
      return (
        <div className="App" style={body} >
          <Header />
          <Card />
        </div>
      );
    }
}

export default App;
