import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";
// import { breed } from "./App.js";

class SearchForm extends Component {
  state = {
    dogBreedName: "",
  };

  onChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
    await console.log(this.state.dogBreedName);
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form id="dog-form" onSubmit={this.onSubmit}>
        <TextField
          id="dog-breed-name"
          name="dogBreedName"
          label="Dog Breed Name"
          value={this.state.dogBreedName}
          onChange={this.onChange}
          variant="outlined"
        />

        <Button className="form-submit" type={"submit"}>
          <Add className="add-a-dog" />
        </Button>
      </form>
    );
  }
}

export default SearchForm;
