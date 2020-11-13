import React, { useEffect, useState } from 'react';
import { Button, Image, Modal, Grid, Icon, Card, Feed, Popup, CardHeader, Table, Header, CardGroup, ModalActions } from 'semantic-ui-react'
import { fetchSpotify } from '../../client';


function Profile({ url, ID, albumName, albumImage, trigger }) {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      style={{ boxShadow: 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #2bc0e4' }}
    >
      <ModalActions style={{ background: 'linear-gradient(to right, #485563, #29323c)', height: '55px' }}>
        <Button floated='right' icon='x' onClick={() => setOpen(false)} />
      </ModalActions>
      <Content
        url={url}
        ID={ID}
        albumName={albumName}
        albumImage={albumImage} />
      

    </Modal>
  )
}

const Content = ({ url, ID, albumName, albumImage, }) => {
  const [artist, setArtist] = useState(null);
  const [related, setRelated] = useState([]);
  const [albumTracks, setAlbumTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getArtists()
    getArtistsRelated()
    getAlbums()
    getAlbumTracks()
  }, []);
  const getArtists = async () => {
    fetchSpotify(`artists/${url}`)
      .catch(error => console.error('Error:', error))
      .then(response => {
        setArtist(response)

      })
  }

  const getAlbums = async () => {
    fetchSpotify(`artists/${url}/albums?include_groups=single%2Cappears_on&market=ES&limit=10&offset=5`)
      .catch(error => console.error('Error:', error))
      .then(response => {
        setAlbums(response.items)


      })
  }

  const getAlbumTracks = async () => {
    fetchSpotify(`albums/${ID}`)
      .catch(error => console.error('Error:', error))
      .then(response => {
        setAlbumTracks(response.tracks.items)

      })
  }

  const getArtistsRelated = async () => {
    fetchSpotify(`artists/${url}/related-artists`)
      .catch(error => console.error('Error:', error))
      .then(response => {
        setRelated(response.artists)
      })
  }


  const allAlbum = albums.map(item => (
    {
      key: item.id,
      name: item.name,
      artists: item?.artists[0]?.name,
      image: item?.images[0]?.url,
      album: item,
      date: item.release_date,
      type: item.type


    }));

  const Tracks = albumTracks.map(item => (
    {
      key: item.id,
      name: item.name,
      time: item.duration_ms

    }));


  const relatedArtists = related.map(item => (
    {
      key: item.id,
      content: item.name,
      image: item?.images[0]?.url,
      followers: item?.followers?.total,
      genres: item?.genres[0],

    }));


  if (!artist) return null;
  return (
    <Modal.Content image key={url} style={{ background: 'linear-gradient(to right, #485563, #29323c)', color: '#000', fontFamily: 'Syne Mono, monospace' }}>
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={5} style={{ marginTop: '-35px' }}>
            <Modal.Header as='h2'>{artist.name}</Modal.Header>
            <Image size='medium' src={artist?.images[0]?.url} wrapped />
            <Modal.Description>
              <br />
              <br />
              <Icon name='users' /><strong style={{ color: '#fff' }}>Followers: </strong>{artist?.followers?.total} <br />
              <Icon name='music' /><strong style={{ color: '#fff' }}> Genre: </strong> {artist?.genres[0]} <br />
              <Icon name='like' /><strong style={{ color: '#fff' }}> Popularity: </strong> {artist?.popularity}%
          <Feed.Event>
                <Card.Content style={{ justifyContent: 'center', display: 'flex', marginTop: '30px' }}>
                  {relatedArtists.slice(0, 4).map((relatedArtist, key) => <Popup key={key} content={relatedArtist?.content} trigger={<Image src={relatedArtist?.image} style={{ width: '60px', height: '60px', marginLeft: '1%' }} circular />} />)}
                </Card.Content>
                <Feed.Content>
                  <CardHeader style={{ fontFamily: 'Syne Mono, monospace', textAlign: 'center', fontSize: '15px', marginTop: '4px', marginLeft: '3px' }}> <Feed.Date content='Artistas relacionados' /></CardHeader>
                </Feed.Content>
              </Feed.Event>
            </Modal.Description>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card.Content style={{ justifyContent: 'left', display: 'flex' }}>
              {allAlbum.slice(0, 4).map((album, key) => (
                <Card
                  key={key}
                  style={{ width: '150px', height: '0px', marginLeft: '1%', marginTop: '3%' }}
                  image={album?.image || "https://react.semantic-ui.com/images/wireframe/image.png"}
                  header={<CardHeader style={{ fontFamily: 'Syne Mono, monospace', textAlign: 'left', fontSize: '15px', marginTop: '-8px', marginLeft: '3px' }} >{album?.name}</CardHeader>}
                  meta={album?.date}
                />))}
            </Card.Content>
            <CardGroup style={{ position: 'absolute', bottom: '20px', left: '30px' }}>
              <Table basic='very' celled collapsing style={{ color: '#fff' }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Track</Table.HeaderCell>
                    <Table.HeaderCell>Duration</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {Tracks.slice(0, 4).map((track, key) => (
                    <Table.Row key={key}>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src={albumImage} rounded size='mini' />
                          <Header.Content>
                            {track?.name}
                            <Header.Subheader>{albumName}</Header.Subheader>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{(track?.time / 60000).toFixed(2)}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </CardGroup>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  );
}

export default Profile