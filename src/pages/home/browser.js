import React from 'react';
import {Card, CardGroup} from 'semantic-ui-react'


const Browser = ({showResult}) => {
  
  const Bser = showResult.map(item =>(
    {           
     name: item.name,
     popularity: item.popularity,
              
  }));
 


  return (  
  <CardGroup itemsPerRow={9}     style={{justifyContent:'center', display:'flex'}}     >
    {Bser.map(item =>        
    <Card 
  
      image='https://react.semantic-ui.com/images/wireframe/image.png'
      header={item.name}
      meta={`Popularidad: ${item.popularity}`}
    />   
    )}</CardGroup>



  );
}
 
export default Browser;