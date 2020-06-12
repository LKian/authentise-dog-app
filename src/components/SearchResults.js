import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

class SearchResults extends Component {
  render() {
    // let dogTitle = this.props.searchText;
    // console.log("dogTitle ", dogTitle);
    return (
      <StyledResults>
        <Container maxWidth="lg" className="section">
          {this.props.breedNameValid === false ? (
            <Typography className="error-message" variant="caption">
              Invalid Breed{" "}
            </Typography>
          ) : null}
          <Typography variant="h3">Dog List</Typography>{" "}
          <Grid
            container
            spacing={4}
            justify="center"
            className="search-results-grid"
          >
            {this.props.data.map(function (item) {
              console.log("line 28: ", item);
              return (
                <Grid item key={item} className="search-results-card-container">
                  <Card className="search-results-card">
                    <Paper elevation={3}>
                      <CardMedia
                        className={`item is ${item}`}
                        component="img"
                        alt={item}
                        image={item}
                      />
                    </Paper>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </StyledResults>
    );
  }
}

const StyledResults = styled.div`
  .error-message {
    color: red;
    display: flex;
    justify-content: center;
  }
  .search-results-grid {
    display: flex;
  }
  .search-results-card-container {
    width: 50%;
    @media (min-width: 768px) {
      width: 20%;
    }
  }
  .search-results-card {
    border: 2px solid #ccc;
  }
  .search-results-grid img {
    object-fit: contain;
  }
`;

export default SearchResults;
