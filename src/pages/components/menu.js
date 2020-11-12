import React from 'react';
import {  Header, Input, Menu } from 'semantic-ui-react'

const MenuBar = ({change, name}) => {
  return ( 
    <Menu  style={{marginTop:'1%'}}>
    <Header as='h2' icon='spotify' content='Spotify' style={{marginTop:'1%', marginLeft:'1%'}}/>  
    <Input size='small' name={name} onChange={change} placeholder='Buscar...' style={{marginTop:'16px', height:'32px', marginLeft:'1%'}} />
    </Menu>
   );
}
 
export default MenuBar;