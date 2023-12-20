import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useGetProductById } from '../hooks/useProducts';


export const ItemDetailContainer = () => {

    const {productData} = useGetProductById

  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productData.thumbnail} />
    <Card.Body>
      <Card.Title>{products.title}</Card.Title>
      <Card.Text>
        {productData.description}
      </Card.Text>
      <div>{productData.price}</div>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
