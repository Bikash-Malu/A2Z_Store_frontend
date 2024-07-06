import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { MdOutlineCategory } from 'react-icons/md'
import { BsBorderStyle } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import DashboardCardView from "../../components/DashboardCardView"
import DefalutLayout from "../../components/admin/SideMenu"
const AdminHome = () => {
    return (
<DefalutLayout>
        <Container>

            <Row>
                <Col md={
                    {
                        span: 6,
                        offset: 3
                    }
                }>


                    <Card className="shadow-sm">

                        <Card.Body className="text-center">
                            <h3 className="text-center">Welcome to admin Dashboard</h3>
                            <p className="text-muted">Customize dashboard for admin , to add categories, to add  products, to view categories, to view products, manage orders, manager users and much more.</p>
                            <p>Start managing products</p>
                            <Container className="d-grid gap-3">
                                <Button as={Link} to={'/admin/categories'} className="text-dark" variant="outline-primary" >Start Managing Categories</Button>
                                <Button as={Link} to={'/admin/products'} className="text-dark" variant="outline-primary">Start Managing Products</Button>
                                <Button as={Link} to={'/admin/users'} className="text-dark" variant="outline-primary">Start Managing Users</Button>
                                <Button as={Link} to={'/admin/orders'} className="text-dark" variant="outline-primary">Start Managing Orders</Button>
                                <Button as={Link} to={'/admin/add-category'} className="text-dark" variant="outline-primary" >Add Categories</Button>
                                <Button as={Link} to={'/admin/add-product'} className="text-dark" variant="outline-primary">Add Products</Button>
                                
                            </Container>
                        </Card.Body>

                    </Card>


                </Col>

            </Row>

            <Row className="mt-5">
                <Col md={6}>

                    <DashboardCardView
                        icon={<MdOutlineProductionQuantityLimits size={80} />}
                        text={'Number of Products'}
                        number={25254}
                    />




                </Col>

                <Col md={6}>



                    <DashboardCardView
                        icon={<MdOutlineCategory size={80} />}
                        text={'Number of Categories'}
                        number={150}
                    />



                </Col>

                <Col md={6} className="mt-3">

                    <DashboardCardView
                        icon={<BsBorderStyle size={80} />}
                        text={'Number of Orders'}
                        number={4545}
                    />


                </Col>

                <Col md={6} className="mt-3">

                    <DashboardCardView
                        icon={<FaUserSecret size={80} />}
                        text={'Number of Users'}
                        number={100}
                    />



                </Col>
            </Row>

        </Container>
        </DefalutLayout>

    )
}

export default AdminHome