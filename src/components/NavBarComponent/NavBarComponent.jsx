
//componente BRAND
import BrandComponent from "../BrandComponent/BrandComponent";
//componente CARTWIDGET
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
//react router dom
import { Link } from "react-router-dom";
//import el archivo css del NavBar
import "./NavBarComponent.css"
// import category
import { useGetCategories } from "../../hooks/useProducts";

//react-boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBarComponent = () => {
  const { categories } = useGetCategories()


  return (
    <header className="header">

      <nav className="header-navbar">
        <BrandComponent />
        <ul className="navbar-list">
          <li>
            <Link to='/' className="navbar-link">PRODUCTS</Link>
          </li>
          <li>
            <a className="navbar-link" href="#">SHOP</a>
          </li>

          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown  className="navbar-link"  title="CATEGORY" id="basic-nav-dropdown">
                    {categories.map((category, index) => {
                      return (
                        <NavDropdown.Item key={index}>
                          <Link  className="navbar-link"  key={index} to={`/category/${category}`}>
                            {category}
                          </Link>
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Link to="/create-product" className="navbar-link" >NEW PRODUCT</Link>
        </ul>
        <CartWidgetComponent />
      </nav>
    </header>
  );
};

export default NavBarComponent;



