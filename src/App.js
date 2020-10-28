import React from 'react';
import './App.css';
import Nav from './Nav';

class App extends React.Component {
  constructor() {
    super();
    this.incraseHandle = this.incraseHandle.bind(this)
    this.state = {
      number: 0
    }
  }
  componentDidMount() {
    console.log("Rendered!")
  }
  incraseHandle() {
    this.setState(prevState => ({ number: prevState.number + 1 }))
  }
  render() {
    return (
      < div className="App" >
        <div className="container">
          <h1>League of Legends {this.state.number}</h1>
          <h2>DEV PAUSED THE PROJECT</h2>
          <Nav number={this.state.number} />
          <p>API Development in progres...</p>
          <button onClick={this.incraseHandle}>Click me</button>
        </div>
      </div >
    );
  }
}

export default App;
