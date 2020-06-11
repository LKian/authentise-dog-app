import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

class SearchResults extends Component {
  render() {
    if (this.props.isBreedNameRight === false) {
      return <p>Invalid breed</p>;
    }
    return (
      <Container
        maxWidth="lg"
        className="section"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <h2>Dog List</h2>
        <GridList cols={4}>
          {this.props.data.map(function (item) {
            return (
              <GridListTile key={item} cols={2 || 1}>
                <img src={item} alt={item} />
              </GridListTile>
            );
          })}
        </GridList>
      </Container>
    );
  }
}

export default SearchResults;
