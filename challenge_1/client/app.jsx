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
    this.onSubmit = this.onSubmit
  }

  componentDidMount() {

  }

  handleChange (event) {
    this.setState({
      searchValue: event.target.value,
    })
  }



  render() {
    return (
      <div className="container">
        <Search searchValue={this.state.searchValue} onChange={this.handleChange}/>
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


