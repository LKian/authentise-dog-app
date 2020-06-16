import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";

class RandomDog extends Component {
  render() {
    return (
      <StyledRandom>
        <Button onClick={this.props.onClick}>
          <Button className="form-random" type={"submit"}>
            See Random Dog
            <HelpIcon />
          </Button>
        </Button>
        <img src={this.props.data}></img>
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
