import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";

const dogsAll = `https://dog.ceo/api/breeds/list/all`;

// console.log("api ", dogsAll);
fetch(dogsAll)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dogBreed = data.breed;
    // console.log("dogBreed ", { dogBreed });
  });

class App extends Component {
  render() {
    return (
      <div className="section">
        <SearchForm />
        {/* <SearchResults /> */}
      </div>
    );
  }
}
export default App;
