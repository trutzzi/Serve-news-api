import React from 'react';
import './App.css';
import Card from './Card'
import Clock from './Clock'
class App extends React.Component {
  constructor() {
    super();
    this.incraseHandle = this.incraseHandle.bind(this)
    this.state = {
      data: null,
      status: 'Loading',
      pag: 1,
      results: 5
    }
  }
  componentDidMount() {
    console.log("Rendered!")
    this.fetchData();
  }
  fetchData() {
    const data = new Promise((resolve, reject) => {
      return fetch('https://cat-fact.herokuapp.com/facts').then(Response => {
        if (Response.ok) {
          resolve(Response)
        } else {
          reject(new Error("Unable to get data."))
        }
      })
    })
    data.then(res => res.json())
      .then(data => {
        this.setState({
          data: data.all,
          status: ''
        })
      })
      .catch(er => this.setState({ status: er.toString() }));
  }
  incraseHandle() {
    this.setState(prevState => ({ number: prevState.number + 1 }))
  }
  renderCards() {
    let cards = [];
    this.state.data.map(data => cards.push(<Card data={data} />))
    return cards.slice((this.state.pag - 1) * this.state.results, (this.state.pag * this.state.results));
  }
  pager(direction) {
    switch (direction) {
      case 'up':
        this.setState(prevState => ({ pag: prevState.pag + 1 }))
        this.fetchData();
        break
      case 'down':
        this.setState(prevState => ({ pag: prevState.pag - 1 }))
        this.fetchData();
        break
    }
  }
  render() {
    return (
      <div className="App" >
        <div className="header">
          <div className="container">
            <div className="grid">
              <div className="grid__col grid__col--1-of-2 grid__col--am">
                <h1>Cats Facts</h1>
              </div>
              <div className="grid__col grid__col--1-of-2 grid__col--am">
                <Clock />
              </div>
            </div>
          </div>
        </div>
        <div className="page">
          <div className="container">
            <div className="status">{this.state.status}</div>
            {this.state.data ? this.renderCards() : ''}
            {this.state.data ? (<div className="pager">
              <span onClick={() => this.pager('down')} className="prev">Prev</span>
              <span onClick={() => this.pager('up')} className="next">Next</span>
            </div>) : ''}
          </div>
        </div>
      </div >
    );
  }
}

export default App;
