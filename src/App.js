import React, { Component } from "react";
import JobDetail from "./components/JobDetail";
import Details from "./data/jobs";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function searchingFor(term) {
  return function(x) {
    return (
      x.positionName.toLowerCase().includes(term.toLowerCase()) ||
      x.cityName.toLowerCase().includes(term.toLowerCase()) ||
      x.companyName.toLowerCase().includes(term.toLowerCase()) ||
      !term
    );
  };
}
class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Details: Details,
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(el) {
    this.setState({ term: el.target.value });
  }
  render() {
    let { Details, term } = this.state;
    return (
      <div className="left-side">
        <form>
          <input
            placeholder="Ara"
            className="search"
            type="text"
            onChange={this.searchHandler}
          />
        </form>
        <div className="list-container">
          {Details.filter(searchingFor(term)).map(Detail => {
            return (
              <Link
                className="Links"
                to={"/jobDetail/" + Detail.jobId}
                key={Detail.jobId}
              >
                <div className="job-info">
                  <h2 className="job-title">{Detail.positionName}</h2>
                  <p className="job-company">{Detail.companyName}</p>
                  <span className="job-city">{Detail.cityName}</span> /{" "}
                  <span className="job-city">{Detail.townName}</span>
                  <img
                    className="job-picture"
                    src={Detail.imageUrl}
                    alt="workplace"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <JobList />
        <Switch>
          <Route path="/jobDetail/:id">
            <JobDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
