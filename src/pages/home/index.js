import React, {useEffect, useState} from 'react';
import { Container, Card, CardGroup,Dimmer} from 'semantic-ui-react'
import FetchSpotify from '../../client';
import Profile from '../profile/index';
import Browser from './browser';





const Spotify = ({showResult, myDimmer}) => {
const [music, setMusic] = useState([]);
const [open, setOpen] = useState({});



useEffect(() => {  
  getReleases()
  Validate(myDimmer)
},[myDimmer]);

const limit = 'limit=10';
const offset = 'offset=5'

const getReleases = async () => {
FetchSpotify(`browse/new-releases?country=CO&${limit}&${offset}`)
.then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response =>{
  setMusic(response.albums.items)
  
})
}

const Validate = (myDimmer) => {
 
let hi = false;
let hi2 = true;
  if(!myDimmer|| !myDimmer=== ''){
    setOpen(hi)
    return

  }
  else{
    setOpen(hi2)
    return
  }
  
}



 return (   
    <Container > 
     <Dimmer active={open} style={{marginTop:'80px', height:'1000px'}}>
     <Browser showResult={showResult}/>
    </Dimmer>
    <CardGroup itemsPerRow={5}>
    {music.map(item =>    
    <Card
      key={item.id}
      image={item.images[1].url}
      header={item.name}
      meta={`${item.total_tracks} Canciones.`}
      description={`Artista: ${item.artists[0].name} Lanzamiento del ${item.type}: ${item.release_date} ${item.available_markets[0]} `}
      extra={<Profile url={item.artists[0].id} ID={item.id} albumName={item.name} albumImage={item.images[1].url}/>}
    />   
    )}</CardGroup>
  </Container>
);

}
 
export default Spotify;