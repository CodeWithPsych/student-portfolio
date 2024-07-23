import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const card = ({title,Description,img,webLink}) => {
  return (
 <div className="card">
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {Description}
        </Card.Text>
        <Button variant="primary"><a href={webLink} target='blank'>Visit Now</a></Button>
      </Card.Body>
    </Card>
 </div>
  );
}

export default card;
