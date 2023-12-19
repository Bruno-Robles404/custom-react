import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./ItemListContainer.css"



const ItemListContainer = ({ productsData }) => {

  console.log(productsData)
  return (
    <div className='card-products'>
      {
        productsData.map(products => {
          return (

            <Card key={products.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={products.thumbnail} />
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                  {products.description}
                </Card.Text>
                <div>{products.price}</div>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          )
        })
      }
    </div>

  )
}

export default ItemListContainer