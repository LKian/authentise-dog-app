import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Pets } from "@material-ui/icons";

class SearchForm extends Component {
  render() {
    return (
      <StyledForm id="dog-form" onSubmit={this.props.onSubmit}>
        <TextField
          id="dog-breed-name"
          name="dogBreedName"
          label="Dog Breed Name"
          value={this.props.searchText}
          onChange={this.props.handleChange}
          variant="outlined"
        />

        <Button className="form-submit" type={"submit"}>
          Submit
          <Pets className="add-a-dog" />
        </Button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-submit svg {
    padding-left: 5px;
  }
  .form-submit span {
    display: flex;
    align-items: center;
  }
`;
export default SearchForm;
