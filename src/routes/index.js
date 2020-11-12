import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Container } from 'semantic-ui-react';
import Spotify from '../pages/home/index';
import MenuBar from '../pages/components/menu';
import FetchSpotify from '../client';



const Routes = () => {


  //active

  const [search, setSearch] = useState('');
  const [openDimmer, setOpenDimmer] = useState('');
  const [showResult, setShowResult] = useState([]);

  const handleInputChange = ((e,{value}) => setSearch(value));

  const BRSearch = async () =>{
    let validate = false;
    let validateFields1 = { ...search}
    if (!search || search === '' || search === null ) {
      validateFields1 = { ...validateFields1, searchChange: true }
      validate = true;
    }
        if (validate && !validateFields1 ==='' && !validateFields1.trim() && validateFields1.lenght < 4) {
          setSearch({ ...validateFields1 })
          setOpenDimmer(true)
      

      return
    }
          


 }

  useEffect(() => {  
    BRSearch() 
    if(search != ''){
      FetchSpotify(`search?q=${search}&type=artist&market=BO&limit=5&offset=5`)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>{
        setShowResult(response.artists.items) 
      })
      return
    }
    


  },[search]);

  const nameMenu = 'search';

 


  return (  
    <Router>   
       <MenuBar name={nameMenu}  change={handleInputChange}/>  
    <Container style={{ margin: 30 }}>
      <Switch>
      <Router path="/"  exact>      
      <Spotify myDimmer={search} showResult={showResult} />
      </Router>
      </Switch>
    </Container>
  </Router>
  );
}
 
export default Routes;