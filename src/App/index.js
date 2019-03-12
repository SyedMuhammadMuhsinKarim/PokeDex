import React, { Component } from "react";
import "./index.css";
import Navbar from "../Components/AppBar/index";
import axios from "axios";

const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://pokeapi.co/api/v2/";
const PATH_SEARCH = "pokemon";
const url = `${PATH_BASE}${PATH_SEARCH}`;
console.log(url);

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };

    this.whatIGet = this.whatIGet.bind(this);
  }

  whatIGet = pokemon => {
    this.setState({
      result: pokemon.data
      // pokeCount: result.count,
      // pokeList: result.results,
      // pokeNext: result.next,
      // pokePrev: result.previous
    });
  };

  componentWillMount() {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(result => this.whatIGet(result))
    //   .catch(error => console.log(error));

    axios(url)
      .then(result => this.whatIGet(result))
      .catch(error => console.log(error));
  }

  render() {
    const { result } = this.state;
    console.log("Results", result);
    return (
      <div>
        {/*<Navbar />*/}
        {/* <p>{result.count}</p> */}
      </div>
    );
  }
}

export default App;
