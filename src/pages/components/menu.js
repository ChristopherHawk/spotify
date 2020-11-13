import React from 'react';
import {  Header, Input, Menu, Dropdown} from 'semantic-ui-react'

const MenuBar = ({change, name, selectName, countryChange}) => {
const CountryOptions = [
    {
      key: 'Estados Unidos',
      text: 'Estados Unidos',
      value: 'US',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'México',
      text: 'México',
      value: 'MX',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Australia',
      text: 'Australia',
      value: 'AU',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Alemania',
      text: 'Alemania',
      value: 'DE',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Irlanda',
      text: 'Irlanda',
      value: 'IE',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Italia',
      text: 'Italia',
      value: 'IT',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Grecia',
      text: 'Grecia',
      value: 'GR',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]
  
  return ( 
    <Menu  style={{marginTop:'1%', background:'linear-gradient(to right, #485563, #29323c)'}}>
    <Header as='h2' icon='spotify'  style={{marginTop:'17px', marginLeft:'1%', color:'darkgreen'}}/>  
    <Header as='h2' content='Spotify'  style={{marginTop:'17px'}}/>  
    <Input size='small' name={name} onChange={change} placeholder='Buscar...' style={{marginTop:'16px', height:'32px', marginLeft:'1%'}} />
    <Menu.Menu position='right'>
    <Dropdown onChange={countryChange} placeholder='Seleccionar país...' name={selectName} style={{ marginTop:'14px', marginRight:'15px', height:'3px'}} clearable options={CountryOptions} selection />
    </Menu.Menu>
    </Menu>
   );
}
 
export default MenuBar;