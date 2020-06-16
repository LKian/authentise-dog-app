import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import RandomDog from "./components/RandomDog";

const URLAllDogBreeds = `https://dog.ceo/api/breeds/list/all`;
const URLAllDogImages = (breed) => `https://dog.ceo/api/breed/${breed}/images`;
const URLRandomDog = `https://dog.ceo/api/breeds/image/random`;

// fetch dog breeds from url and grab just keys/breeds
const fetchBreeds = () =>
  fetch(URLAllDogBreeds)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return Object.keys(data.message);
    });

// fx:  fetch from a url takes breed as arg and passes into the url
const fetchImages = (breed) =>
  fetch(URLAllDogImages(breed))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

const fetchRandomBreed = () =>
  fetch(URLRandomDog)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfBreeds: [],
      breed: "",
      searchedBreed: "",
      listOfBreedImages: [],
      breedNameValid: true,
      randomDogURL: "",
    };
  }

  async componentDidMount() {
    console.log("Component did mount.");
    let breedList = [];

    await fetchBreeds()
      .then(function (data) {
        console.log("DATA: ", data);
        breedList = data;
      })
      .catch(function (err) {
        console.log("Error: ", err);
      });

    this.setState({
      listOfBreeds: breedList,
    });
  }

  handleBreedNameChange = (e) => {
    e.preventDefault();

    this.setState({
      breed: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let breedImages = [];

    if (this.state.listOfBreeds.includes(this.state.breed) === true) {
      this.setState({
        breedNameValid: true,
        breed: "",
        searchedBreed: this.state.breed,
      });

      await fetchImages(this.state.breed)
        .then(function (data) {
          breedImages = data.message;
        })
        .catch(function (err) {
          console.log("err", err);

          return err;
        });

      this.setState(
        {
          listOfBreedImages: breedImages,
        },
        () => {
          console.log("User is searching for: ", this.state.search);
        }
      );
    } else {
      this.setState({
        breedNameValid: false,
      });
    }
  };

  handleRandom = async () => {
    let randomDog = "";

    await fetchRandomBreed().then(function (data) {
      randomDog = data.message;
    });
    this.setState({
      randomDogURL: randomDog,
    });
    console.log("THIS ", this.state.randomDogURL);

    // console.log("this is the random's state ", this.state.randomDogURL);
  };

  render() {
    console.log("Current search in progress: ", this.state);

    return (
      <div className="section">
        {/* {this.state.breed != null ? this.state.breed : "breed is null"} */}

        <SearchForm
          searchText={this.state.breed}
          onSubmit={this.handleSubmit}
          handleChange={this.handleBreedNameChange}
        />
        <SearchResults
          data={this.state.listOfBreedImages}
          searchText={this.state.breed}
          breedNameValid={this.state.breedNameValid}
          searchedBreed={this.state.searchedBreed}
        />
        <RandomDog onClick={this.handleRandom} data={this.state.randomDogURL} />
      </div>
    );
  }
}
export default App;
