import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Container } from 'semantic-ui-react';
import Spotify from '../pages/home/index';
import MenuBar from '../pages/components/menu';
import { fetchSpotify } from '../client';

const Routes = () => {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState([]);
  const handleInputChange = ((e, { value }) => setSearch(value));

  useEffect(() => {
    if (search) {
      fetchSpotify(`search?q=${search}&type=track%2Cartist&market=BO&limit=5&offset=5`)
        .catch(error => console.error('Error:', error))
        .then(response => {
          setShowResult(response.artists.items)
        })
    }
  }, [search]);

  return (
    <Router>
      <MenuBar name="search" change={handleInputChange} />
      <Container style={{ margin: 30 }}>
        <Switch>
          <Router path="/" exact>
            <Spotify myDimmer={search} showResult={showResult} />
          </Router>
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;