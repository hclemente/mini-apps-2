import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';
import LineGraph from './LineGraph';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {},
      disclaimer: '',
      isLoading: true,
    }
  }
  componentDidMount() {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
    .then((data) => {
      this.setState({
        data: data.data.bpi,
        disclaimer: data.data.disclaimer,
        isLoading: false,
      });
    })
    .catch((err) => console.log(err));
  }
  render() {
    let labels = [];
    let data = [];
    for (var key in this.state.data) {
      labels.push(key);
      data.push(Math.ceil(this.state.data[key]));
    }
    let render;
    if (this.state.isLoading) {
      render = (<div>isLoading</div>)
    } else {
      render = (
        <div>
                <LineGraph labels={labels} data={data}/>
                <h4>Powered by CoinDesk</h4>
        </div> )
    }
    return (
      <div>
        {render}
      </div>
    )
  }
}

export default App;