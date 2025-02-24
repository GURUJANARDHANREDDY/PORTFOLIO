import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JANARDHAN REDDY</span> 
            from <span className="purple"> JAMMALAMADUGU, India.</span>
            <br />
            I am going to pursue my Integrated M.Tech in Data Science at 
            <span className="purple"> Vellore Institute of Technology (VIT).</span>
            <br />
            I have experience in Full Stack Development, Machine Learning,Database Management,and Data visualization.
          </p>

          <hr style={{ borderTop: "2px solid rgba(255, 255, 255, 0.2)", margin: "20px 0" }} />

          <p style={{ 
            color: "rgb(255, 215, 0)", 
            fontWeight: "bold", 
            fontSize: "1.5rem", 
            textAlign: "center", 
            fontFamily: "Georgia, serif",
            textShadow: "2px 2px 5px rgba(255, 215, 0, 0.5)"
          }}>
            ✨ Solve. Create. Inspire. ✨
          </p>

          <footer className="blockquote-footer" style={{ textAlign: "center", marginTop: "10px", fontSize: "1rem" }}>
            <span className="purple">— Janardhan Reddy</span>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
