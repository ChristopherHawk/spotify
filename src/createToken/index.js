import React, { useState } from "react";
import { Button, Input, Modal, ModalDescription,List, Icon } from "semantic-ui-react";

const CreateToken = () => {
  const [token, setToken] = useState("");

  const saveToken = () => {
    localStorage.setItem("tokenSpotify", token);
    window.location.reload();
  }
  return (
    <Modal
      size="tiny"
      open={true}>
      <Modal.Header><Icon name='user'/> Crear sesión por token</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          onChange={(e, { value }) => setToken(value)}
          placeholder="¡Pegar el token aqui!" />
        <br />
        <Button color='green' floated='right' onClick={saveToken} disabled={!token || !token.trim()} content="Aceptar" />
        
         
       <Icon name='linkify'/><a target='_blank' href='https://developer.spotify.com/console/get-artist/?id='>Obtener token</a>
      
        
      </Modal.Content>
    </Modal>
  );
}

export default CreateToken;