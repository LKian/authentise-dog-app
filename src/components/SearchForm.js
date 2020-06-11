import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";

class SearchForm extends Component {
  render() {
    return (
      <form id="dog-form" onSubmit={this.props.onSubmit}>
        <TextField
          id="dog-breed-name"
          name="dogBreedName"
          label="Dog Breed Name"
          value={this.props.searchText}
          onChange={this.props.handleChange}
          variant="outlined"
        />

        <Button className="form-submit" type={"submit"}>
          <Add className="add-a-dog" /> Submit
        </Button>
      </form>
    );
  }
}

export default SearchForm;
