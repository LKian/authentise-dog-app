import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";

class RandomDog extends Component {
  render() {
    const dogName = this.props.data.split("/")[4];

    return (
      <StyledRandom>
        <Button onClick={this.props.onClick}>
          <Button className="form-random" type={"submit"}>
            See Random Dog
            <HelpIcon />
          </Button>
        </Button>
        <h3>{dogName}</h3>
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
`;

export default RandomDog;
