import React, { Component } from 'react';
import axios from "axios";
import { Container, Image, Card, CardDeck } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <Container fluid="xl">
        <h1 className="text-center">We Want You to Travel Calmly</h1>
        <Image src="https://img.theculturetrip.com/2460x1000/wp-content/uploads/2019/04/dan-freeman-7zb7kuyqg1e-unsplash_crop.jpg" alt="homePage" fluid />
        <h1 className="text-center">What is Aussie Hop?</h1>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/05/dr9763.jpg" />
            <Card.Body>
              <Card.Title>Cheap</Card.Title>
              <Card.Text>
                Aussie Hop is all about discovering the REAL Australia through the eyes of a local Australian in a safe, fun and cheap way.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/11/005.jpg" />
            <Card.Body>
              <Card.Title>Flexible</Card.Title>
              <Card.Text>
                Travellers can choose what to do, where to eat and sleep, and how long they spend at each destination, putting them in full control of their trip. Love a destination? Hop off and stay there as long as they like! Short on time? Skip through a destination quickly whilst seeing its main attractions.{' '}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/06/snorkel-with-turtle-e1593528389151.jpg" />
            <Card.Body>
              <Card.Title>Convenient</Card.Title>
              <Card.Text>
                Hop on & hop off bus service along Australia East Coast.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default Home;
