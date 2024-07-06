

import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import logo from "./../assets/logo.png"

const CustomNavbar = () => {

    const userContext = useContext(UserContext)
    const { cart, setCart } = useContext(CartContext)
    const doLogout = () => {
        userContext.logout()
        window.location.reload()
    }
    return (
        <Navbar className='bg-navbar-color' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand as={NavLink} to="/">

                    <img alt='logo' src={logo} height={25} width={25} />

                    <span className='ms-2 mt-1'>么❷乙 STORE</span>

                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} to="/services">Features</Nav.Link>

            

                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                        <Nav.Link as={NavLink} to="/cart">Cart {userContext.isLogin && cart && '(' + cart.items.length + ')'} </Nav.Link>

                        {
                            (userContext.isLogin) ?
                                <>

                                    {userContext.isAdminUser && (
                                        <>
                                            <Nav.Link as={NavLink} to="/admin/home" >AdminDashboard</Nav.Link>
                                        </>
                                    )}
                                    <Nav.Link as={NavLink} to={`/users/profile/${userContext.userData.user.userId}`} >{userContext.userData.user.name}</Nav.Link>
                                    <Nav.Link as={NavLink} to="/users/orders" >Orders</Nav.Link>
                                    <Nav.Link data-bs-toggle="modal" data-bs-target="#exampleModal">Logout</Nav.Link>
                                </>
                                : (
                                    <>
                                        <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>
                                        <Nav.Link as={NavLink} to="/register">Signup</Nav.Link>
                                    </>
                                )
                        }


                    </Nav>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h3 class="modal-title fs-5" id="exampleModalLabel" className='text-center'>Logout Popup</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    Are you sure want to logout???
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" onClick={doLogout}>Logout here</button>
      </div>
    </div>
  </div>
</div>
                </Navbar.Collapse>
            </Container>
        </Navbar >


    )
}

export default CustomNavbar;