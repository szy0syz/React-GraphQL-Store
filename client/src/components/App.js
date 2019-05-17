import React, { Component } from 'react';
import { Container, Box, Heading } from 'gestalt';
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  }

  async componentDidMount() {
    try {
      const res = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            brands {
              id
              name
              description
              createdAt
              image {
                url
              }
            }
          }`
        }
      });
      const { data = {} } = res;
      this.setState({ brands: data.brands })
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        {/* Brands Scction */}
        <Box 
          display="flex"
          justfycontent="center"
          marginbottom={2}
        >
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
