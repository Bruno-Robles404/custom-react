
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import { useGetProductById } from '../hooks/useProducts';
import ItemCountComponent from '../components/ItemCountComponent/ItemCountComponent';



export const ItemDetailContainer = () => {
  
  const {id} = useParams ();

  const { productData } = useGetProductById("products", id)

  return (
    <Card key={productData.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>
          {productData.description}
        </Card.Text>
        <div>{productData.price}</div>
        <ItemCountComponent productId={productData.id}/>
        <Link to={`/update-product/${productData.id}`} >Editor producto</Link>
      </Card.Body>
    </Card>
  )
}
