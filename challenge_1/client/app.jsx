import React from 'react';
import Search from './Search';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  onSubmit() {
    axios.get(`http://localhost:3000/events?q=${this.state.searchValue}&_start=${1}&_limit=10`)
    .then((events) => {
      this.setState({
        results: events.data,
      });
      console.log(this.state);
    })
    .catch((err)  => console.log(err));
  }



  render() {
    return (
      <div className="container">
        <Search searchValue={this.state.searchValue} onChange={this.handleChange} onSubmit={this.onSubmit}/>
      </div>

    )

  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   }
// })


