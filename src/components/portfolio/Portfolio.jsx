import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import "./portfolio.scss"

const Portfolio = () => {
  return (
    <div>
      <Container>Portfolio
        <Row>
            <Col><AbcOutlinedIcon/></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Portfolio
