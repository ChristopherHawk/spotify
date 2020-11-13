import React from 'react';
import {  Header, Input, Menu } from 'semantic-ui-react'

const MenuBar = ({change, name}) => {
  return ( 
    <Menu  style={{marginTop:'1%', background:'linear-gradient(to right, #485563, #29323c)'}}>
    <Header as='h2' icon='spotify'  style={{marginTop:'17px', marginLeft:'1%', color:'darkgreen'}}/>  
    <Header as='h2' content='Spotify'  style={{marginTop:'17px'}}/>  
    <Input size='small' name={name} onChange={change} placeholder='Buscar...' style={{marginTop:'16px', height:'32px', marginLeft:'1%'}} />
    </Menu>
   );
}
 
export default MenuBar;