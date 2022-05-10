import React from "react";
import { CardGroup, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Process = () => {
  const [ show, setShow ] = useState(true);

  const [process, setProcess] = useState([
    {
      id: "1",
      img: "./images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Brand links help instil confidence in your content.",
    },
    {
      id: "2",
      img: "./images/icon-detailed-records.svg",
      title: "Detailed Records",
      text: "Get detailed analytics on who clicks your links, what devices they used and where they clicked from. Helps to inform better decisions.",
    },
    {
      id: "3",
      img: "./images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      text: "Improve your brand image and your user's experience. Customize and reuse your links to create dynamic and engaging content for your campaign.",
    },
  ]);

  return (
    <div>
      <CardGroup>
        {process.map((card) => (
          <Card className="border-0 my-4" key={card.id}>
            <div className="image-primary mb-5 mx-auto">
            <img  variant="top" src={card.img} />
            </div>
            <Card.Body>
              <Card.Title className="fst-italic text-secondary">{card.title}</Card.Title>
              <Card.Text className="text-secondary">{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <Link to="/AboutPage"><Button type="submit" className="bg-white cont-button-2 mb-5" variant="outline-success">Read More</Button></Link>
    </div>
  );
};




export default Process;
