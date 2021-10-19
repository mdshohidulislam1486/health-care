import React from 'react';
import { Card } from 'react-bootstrap';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

const SingleCard = ({card}) => {
  const {name, description} =card
  return (
    <>
        {
              <Card
                  style={{ width: '18rem' }}
                  className="mb-2 col-12 mx-2 col-md-6 bg-success text-light"
                  
                >
                  <Card.Header>{name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {description}
                    </Card.Text>
                  </Card.Body>
              </Card>
            
        }
    </>
  );
};

export default SingleCard;