import React, { useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";

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
      <Modal.Header>Crear sesion por token</Modal.Header>
      <Modal.Content>
        <Input
          fluid
          onChange={(e, { value }) => setToken(value)}
          placeholder="Pegue el token aqui" />
        <br />
        <Button onClick={saveToken} disabled={!token || !token.trim()} content="Aceptar" />
      </Modal.Content>
    </Modal>
  );
}

export default CreateToken;