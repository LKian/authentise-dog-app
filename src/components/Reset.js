import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AutorenewIcon from "@material-ui/icons/Autorenew";

class Reset extends Component {
  render() {
    return (
      <StyledReset>
        <Button onClick={this.props.onClick}>
          <Button className="form-random" type={"submit"}>
            Reset
            <AutorenewIcon />
          </Button>
        </Button>
      </StyledReset>
    );
  }
}

const StyledReset = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Reset;
