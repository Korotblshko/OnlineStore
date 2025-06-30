import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'

const Shop = () => {
  return (
    <Container>
        <Row className='mt-3'>
            <Col md={3} style={{maxWidth: "fit-content", textAlign: "center"}}>
              <TypeBar/>
            </Col>
            <Col md={9} style={{maxWidth: "fit-content", textAlign: "center"}}>
              <BrandBar/>
            </Col>
        </Row>
    </Container>
  )
}

export default Shop
