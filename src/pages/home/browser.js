import React from 'react';
import { Card, CardGroup } from 'semantic-ui-react'


const Browser = ({ showResult }) => (
  <CardGroup itemsPerRow={7} >
    {showResult.map((item, key) =>
      <Card
        key={key}
        image={item?.images[0]?.url}
        header={item.name}
        meta={`Popularidad: ${item.popularity}`}
      />
    )}</CardGroup>
);


export default Browser;