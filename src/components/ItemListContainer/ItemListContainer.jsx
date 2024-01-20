
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"

import { Link } from "react-router-dom"

const ItemListContainer = ({productsData}) => {

  return (
    <div className='card-products'>
      {productsData.map((products) => {
       
          return (
            <Card key={products.id} style={{ width: '15rem' }}>
              <Link to={`/item/${products.id}`}>
                <Card.Img variant="top" src={products.thumbnail} />
              </Link>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                  {products.description}
                </Card.Text>
                <div>{products.price}</div>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>

  )
}

export default ItemListContainer