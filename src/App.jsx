import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';

import Intro from './img/construction-scaffolding.jpg';
import Intro1 from './img/screws-loose.jpg';
import Intro2 from './img/measure-twice-cut-once.jpg';
import Cimento from './img/cimento.webp';
import Tabua from './img/tabua.webp';
import Telha from './img/telha.webp';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div>
    <div>

    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Materiais Marquinhos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={(Intro)}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={(Intro1)}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={(Intro2)}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


        <div className="d-flex justify-content-around row ah">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={(Tabua)} />
        <Card.Body>
          <Card.Title className="pouco">Tabua Pinus 30 cm com 3 Metros</Card.Title>
          <Card.Text className="bolda">
          R$ 25,00
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={(Telha)} />
        <Card.Body>
          <Card.Title className="pouco">Telha Confibra Ondulada De Fibrocimento 244x110cm 5mm Telhado</Card.Title>
          <Card.Text className="bolda">
          R$ 54,00
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={(Cimento)} />
        <Card.Body>
          <Card.Title className="pouco">Cimento Todas As Obras Votoran 50kg</Card.Title>
          <Card.Text className="bolda">
          R$ 29,90
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

    <Card className="footer">
      <Card.Body>
        <Card.Title>&copy; 2023 | Copyright</Card.Title>
        <Card.Text>
          Created by William Weile Feng
        </Card.Text>
      </Card.Body>
    </Card>

      </div>
    </div>
    </>
  )
}

export default App