import React from 'react';
import Search from './Search';
import axios from 'axios';
import EventList from './EventList';
import ReactPaginate from 'react-paginate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      results: [],
      pageCount: 0,
      start: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(start) {
    axios.get(`http://localhost:3000/events?q=${this.state.searchValue}&_start=${start}&_limit=10`)
    .then((events) => {
      this.setState({
        results: events.data,
        pageCount: Math.ceil(events.headers["x-total-count"] / 10)
      });
    })
    .catch((err)  => console.log(err));
  }

  componentDidMount() {

  }

  onChange (event) {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  onSubmit() {
    this.getEvents();
  }

  onPageClick(results) {
    let selected = results.selected;
    let start = Math.ceil(selected * 10);
    this.setState(
      {start: start},
      this.getEvents(this.state.start)
    );
  }

  render() {
    return (
      <div className="container">
        <Search
          searchValue={this.state.searchValue}
          onChange={this.onChange}
          onSubmit={this.onSubmit}/>
        <EventList
          results={this.state.results} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.onPageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>

    )

  }
}

export default App;


