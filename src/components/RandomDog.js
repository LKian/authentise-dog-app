import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";

class RandomDog extends Component {
  render() {
    const dogName = this.props.data.split("/")[4];

    console.log("data ", dogName);
    console.log("props ", this.props);

    const dogNameFormatted = dogName != null ? dogName.replace("-", " ") : "";
    // console.log(dogNameFormatted);

    return (
      <StyledRandom>
        <Button onClick={this.props.onClick}>
          <Button className="form-random" type={"submit"}>
            See Random Dog
            <HelpIcon />
          </Button>
        </Button>
        <h3 class="random-dog-title">{dogNameFormatted}</h3>
        <img src={this.props.data} alt={dogName}></img>
      </StyledRandom>
    );
  }
}

const StyledRandom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
  }
  .random-dog-title {
    text-transform: capitalize;
  }
`;

export default RandomDog;
