import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Container } from 'semantic-ui-react';
import Spotify from '../pages/home/index';
import MenuBar from '../pages/components/menu';
import { fetchSpotify } from '../client';

const Routes = () => {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState([]);
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState('CO');
  const handleInputChange = ((e, { value }) => setSearch(value));
  const handleInputChangeCountry = ((e, { value }) => setCountry(value));
  

  useEffect(() => {
    if (search) {
      fetchSpotify(`search?q=${search}&type=track%2Cartist&market=CO&limit=14&offset=5`)
        .catch(error => console.error('Error:', error))
        .then(response => {
          setShowResult(response.artists.items)
        })
    }
    if(country) {
      const limit = 'limit=50';
      const offset = 'offset=5'
      fetchSpotify(`browse/new-releases?country=${country}&${limit}&${offset}`)
      .then(response => {
        setLoading(false);
        setMusic(response?.albums?.items || [])      
      })
      .catch(error => console.error('Error:', error))
    }

    
  }, [search, country]);

//------------------------------//






  return (
    <Router>
      <MenuBar countryChange={handleInputChangeCountry} selectName='country' name="search" change={handleInputChange} />
      <Container style={{ margin: 30 }}>
        <Switch>
          <Router path="/" exact>
            <Spotify loading={loading} music={music} myDimmer={search} showResult={showResult} />
          </Router>
        </Switch>
      </Container>
    </Router>
  );
}

export default Routes;