import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsh Gupta </span>
            from <span className="purple"> Agra, India.</span>
            <br />
            <br />
            I am currently a 2nd year student at Thapar University of Engineering and Technology.
            <br />
            
            
            <br />
             {/* Something to write  */}
          </p>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
