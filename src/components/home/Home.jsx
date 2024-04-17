import React, { useEffect, useState } from 'react'
import './home.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const Home = () => {

  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await a.json();
    setCards(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            {cards.map((card) => {
              return (<Card key={card.id}>
                <p>Name: {card.name}</p>
                <p>Email: {card.email}</p>
                {/* eea2c914175c4bfe9e66baccc536e50e */}
              </Card>)
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
