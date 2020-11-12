import React, {useEffect, useState} from 'react';
import { Button, Image, Modal, Grid, Icon, Card, Feed, Popup, CardHeader, Table, Header, CardGroup, ModalActions } from 'semantic-ui-react'
import FetchSpotify from '../../client';


function Profile({url, ID, albumName, albumImage}) {
  const [open, setOpen] = useState(false)
  const [artists, setArtists] = useState([]);
  const [imageArtist, setImageArtist] = useState([]);
  const [followersArtist, setFollowersArtist] = useState([]);
  const [genresArtist, setGenresArtist] = useState([]);
  const [related, setRelated] = useState([]);
  const [albumTracks, setAlbumTracks] = useState([]);
  const [Track1, setTrack1] = useState([]);
  const [Track2, setTrack2] = useState([]);
  const [Track3, setTrack3] = useState([]);
  const [duration1, setDuration1] = useState([]);
  const [duration2, setDuration2] = useState([]);
  const [duration3, setDuration3] = useState([]); 
  const [imageRelate, setImageRelated] = useState([]);
  const [imageRelate2, setImageRelated2] = useState([]);
  const [imageRelate3, setImageRelated3] = useState([]);
  const [imageRelate4, setImageRelated4] = useState([]);
  const [moreArtists, setMoreArtists] = useState([]);
  const [moreArtists2, setMoreArtists2] = useState([]);
  const [moreArtists3, setMoreArtists3] = useState([]);
  const [moreArtists4, setMoreArtists4] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [album1, setAlbum1] = useState([]);
  const [album2, setAlbum2] = useState([]);
  const [album3, setAlbum3] = useState([]);
  const [album4, setAlbum4] = useState([]);
  const [albumDate1, setAlbumDate1] = useState([]);
  const [albumDate2, setAlbumDate2] = useState([]);
  const [albumDate3, setAlbumDate3] = useState([]);
  const [albumDate4, setAlbumDate4] = useState([]);
  const [pictureAlbum1, setPictureAlbum1] = useState([]);
  const [pictureAlbum2, setPictureAlbum2] = useState([]);
  const [pictureAlbum3, setPictureAlbum3] = useState([]);
  const [pictureAlbum4, setPictureAlbum4] = useState([]);

  

  useEffect(() => {  
    getArtists()
    getArtistsRelated()
    getAlbums()
    getAlbumTracks()
  },[]);
  const getArtists = async () => {
  FetchSpotify(`artists/${url}`)
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response =>{
    setArtists(response)
   
  })
  }

  const getAlbums = async () =>{
    FetchSpotify(`artists/${url}/albums?include_groups=single%2Cappears_on&market=ES&limit=10&offset=5`)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>{
      setAlbums(response.items)       
     
    })
  }

  const getAlbumTracks = async () => {
  FetchSpotify(`albums/${ID}`)
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response =>{
    setAlbumTracks(response.tracks.items) 
   
  })
  }

  const getArtistsRelated = async () => {
  FetchSpotify(`artists/${url}/related-artists`)
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response =>{
    setRelated(response.artists)    
   
  })
  }
  

const allAlbum = albums.map(item =>(
   {      
    key: item.id,
    name: item.name,
    artists: item.artists[0].name,
    image: item.images[0].url,
    album: item,
    date: item.release_date,
    type: item.type
      

 }));

const Tracks = albumTracks.map(item =>(
   {      
    key: item.id, 
    name: item.name,
    time: item.duration_ms  

 }));
 
 
 const relatedArtists = related.map(item =>(
   {      
    key: item.id,
    content:item.name, 
    image: item.images[0].url,
    followers: item.followers.total,
    genres: item.genres[0],

 }));


const dataArtist = () =>{
  let exact = 60000;
  setImageArtist(artists.images[0].url)
  setFollowersArtist(artists.followers.total)
  setGenresArtist(artists.genres[0])
  setMoreArtists(relatedArtists[0].content)
  setMoreArtists2(relatedArtists[1].content)
  setMoreArtists3(relatedArtists[2].content)
  setMoreArtists4(relatedArtists[3].content)
  setImageRelated(relatedArtists[0].image)
  setImageRelated2(relatedArtists[1].image)
  setImageRelated3(relatedArtists[2].image)
  setImageRelated4(relatedArtists[3].image)
  setAlbum1(allAlbum[0].name)
  setAlbum2(allAlbum[1].name)
  setAlbum3(allAlbum[2].name)
  setAlbum4(allAlbum[3].name)
  setPictureAlbum1(allAlbum[0].image)
  setPictureAlbum2(allAlbum[1].image)
  setPictureAlbum3(allAlbum[2].image)
  setPictureAlbum4(allAlbum[3].image)
  setAlbumDate1(allAlbum[0].date)
  setAlbumDate2(allAlbum[1].date)
  setAlbumDate3(allAlbum[2].date)
  setAlbumDate4(allAlbum[3].date)
  setTrack1(Tracks[0].name)
  setTrack2(Tracks[1].name)
  setTrack3(Tracks[2].name)
 
  setDuration1((Tracks[0].time/exact).toFixed(2))
  setDuration2((Tracks[1].time/exact).toFixed(2))
  setDuration3((Tracks[3].time/exact).toFixed(2))
  

 }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={dataArtist}>Más</Button>}
      style={{ boxShadow:'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #fff'}}
    > <ModalActions style={{ background:'linear-gradient(to right, #485563, #29323c)', height:'55px'}}>
      <Button  floated='right' icon='x' onClick={() => setOpen(false)}/>
      </ModalActions>
      <Modal.Content image key={url} style={{background:'linear-gradient(to right, #485563, #29323c)', color:'#000', fontFamily: 'Syne Mono, monospace'}}>
     
      <Grid celled='internally'>
      <Grid.Row>
      <Grid.Column width={5} style={{ marginTop:'-25px'}}>     
      <Modal.Header as='h2'>{artists.name}</Modal.Header>
      <Image size='medium' src={imageArtist} wrapped />
      <Modal.Description>
      <br/>
      <br/>

      <Icon name='users'/><strong style={{color:'#fff'}}>Followers: </strong>{followersArtist} <br/>
      <Icon name='music'/><strong style={{color:'#fff'}}> Genre: </strong> {genresArtist} <br/>
      <Icon name='like'/><strong style={{color:'#fff'}}> Popularity: </strong> {artists.popularity}%
           
      <Feed.Event>
      <Card.Content style={{justifyContent: 'center', display:'flex', marginTop:'30px'}}>
      <Popup content={moreArtists} trigger={<Image src={imageRelate} style={{width:'60px', height:'60px'}} circular/>} />
      <Popup content={moreArtists2} trigger={<Image src={imageRelate2} style={{width:'60px', height:'60px', marginLeft:'1%'}} circular/>} />
      <Popup content={moreArtists3} trigger={<Image src={imageRelate3} style={{width:'60px', height:'60px', marginLeft:'1%'}} circular/>} />
      <Popup content={moreArtists4} trigger={<Image src={imageRelate4} style={{width:'60px', height:'60px', marginLeft:'1%'}} circular/>} />
        </Card.Content>
        <Feed.Content>
         <CardHeader style={{fontFamily: 'Syne Mono, monospace',  textAlign:'center', fontSize:'15px', marginTop:'4px', marginLeft:'3px'}}> <Feed.Date content='Artistas relacionados'  /></CardHeader>
        </Feed.Content>
      </Feed.Event>     
      </Modal.Description>
      </Grid.Column>
      <Grid.Column width={10}>
      <Card.Content style={{justifyContent: 'left', display:'flex'}}>
      <Card
        style={{width:'150px', height:'0px', marginLeft:'1%', marginTop:'3%'}}
        image={pictureAlbum1}
        header={<CardHeader style={{fontFamily: 'Syne Mono, monospace', textAlign:'left', fontSize:'15px', marginTop:'-8px', marginLeft:'3px'}} >{album1}</CardHeader>}
        meta={albumDate1}        
        />
      <Card
        style={{width:'150px', height:'0px', marginLeft:'1%'}}
        image={pictureAlbum2}
        header={<CardHeader style={{fontFamily: 'Syne Mono, monospace',  textAlign:'left', fontSize:'15px', marginTop:'-8px', marginLeft:'3px'}} >{album2}</CardHeader>}
        meta={albumDate2}        
        />
      <Card
        style={{width:'150px', height:'0px', marginLeft:'1%'}}
        image={pictureAlbum3}
        header={<CardHeader style={{fontFamily: 'Syne Mono, monospace',   textAlign:'left', fontSize:'15px', marginTop:'-8px', marginLeft:'3px'}} >{album3}</CardHeader>}
        meta={albumDate3}        
        />
      <Card
        style={{width:'150px', height:'0px', marginLeft:'1%'}}
        image={pictureAlbum4}
        header={<CardHeader style={{fontFamily: 'Syne Mono, monospace',   textAlign:'left', fontSize:'15px', marginTop:'-8px', marginLeft:'3px'}} >{album4}</CardHeader>}
        meta={albumDate4}       
        />


</Card.Content>

<CardGroup style={{ position:'absolute', bottom:'20px', left:'30px'}}>

<Table basic='very' celled collapsing style={{ color:'#fff' }}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Track</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={albumImage} rounded size='mini' />
            <Header.Content>
            {Track1}
  <Header.Subheader>{albumName}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
  <Table.Cell>{duration1}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={albumImage} rounded size='mini' />
            <Header.Content>
            {Track2}
              <Header.Subheader>{albumName}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{duration2}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src={albumImage} rounded size='mini' />
            <Header.Content>
            {Track3}
              <Header.Subheader>{albumName}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{duration3}</Table.Cell>
      </Table.Row>
      
    </Table.Body>
  </Table>
  </CardGroup>




     

     
     
      

      </Grid.Column>    
      </Grid.Row>
      <Grid.Row>      
      
  
    
    </Grid.Row>
  </Grid>
      </Modal.Content>     
    </Modal>
  )
}

export default Profile