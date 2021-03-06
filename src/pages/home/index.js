import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, Dimmer, Message } from 'semantic-ui-react'
import Profile from '../profile/index';
import Browser from './browser';

const Spotify = ({ showResult, myDimmer, music, loading }) => {

  const [open, setOpen] = useState({});  

  useEffect(() => {   
    Validate(myDimmer)
  }, [myDimmer]);

  const Validate = (myDimmer) => {
    if (!myDimmer || !myDimmer.trim()) return setOpen(false);
    return setOpen(true);
  }

  if (loading) return <Message>Cargando...</Message>;

  if (!music.length) return <Message>No hay datos para mostrar.</Message>


  return (
    <Container >
      <Dimmer active={open} style={{ marginTop: '85px', height: '100%' }}>
        <Browser showResult={showResult} />
      </Dimmer>
      <CardGroup itemsPerRow={5}>
        {music.map(item =>
          <Profile
            key={item.id}
            trigger={
              <Card
                style={{ background: 'linear-gradient(to right, #485563, #29323c)', boxShadow: 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #2c5364' }}
                image={item?.images[1]?.url}
                header={item.name}
                meta={`${item.total_tracks} Canciones.`}
                description={`Artista: ${item?.artists[0]?.name} Lanzamiento del ${item.type}: ${item.release_date} ${item.available_markets[0]} `}
              />
            } url={item?.artists[0]?.id} ID={item.id} albumName={item.name} albumImage={item.images[1].url} />

        )}</CardGroup>
    </Container>
  );

}

export default Spotify;