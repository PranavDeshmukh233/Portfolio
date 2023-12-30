import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import itsol from "../assets/projects/Capture1.JPG";
import keepnoteimg from "../assets/projects/Capture0.JPG";
import ecomimg from "../assets/projects/ecomimg.JPG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomimg}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. This website include functionality like login functionality,Search and filter facility like filter by category and price,shopping cart,Payment gateway. MongoDB Atlas is used to store data like user data,admin data and product data.&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Key Features:&nbsp;1.User-friendly Interface&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
              2.Secure User Authentication&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;
              3.Product Search and Filters&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              4.Shopping Cart and Checkout&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;
              5.Payment Gateway Integration&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              6.Admin Dashboard "
              ghLink="https://github.com/PranavDeshmukh233/ecom"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keepnoteimg}
              isBlog={false}
              title="Keep-notes"
              description="KeepNote, a sleek and intuitive web application built using React.js that revolutionizes the way you organize and manage your notes.This project also includes random Quote generater. This project aims to provide users with a seamless and responsive note-taking experience.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;
              Key Features:

              Intuitive User Interface: KeepNote has a user-friendly interface designed for convenience and functionality.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
              
              Responsive Design: The design allows apps to adapt to different screen sizes, providing a consistent and efficient experience across platforms.
              "
              ghLink="https://github.com/PranavDeshmukh233/Keep-Notes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={itsol}
              isBlog={false}
              title="IT Solution Company Website"
              description="This website is designed to be a comprehensive solution provider, addressing a IT problems and offering insights, solutions, and resources. It's a dynamic platform crafted with HTML, CSS, JavaScript, and PHP, seamlessly connected to a robust XAMPP server for database functionality. This project aims to showcase the breadth of IT solutions while providing a user-friendly interface for clients, partners, and technology enthusiasts.&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;
              Key Features:
              Responsive Design:  responsive design that ensures a consistent and enjoyable browsing experience.&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Service Showcase: Explore our comprehensive range of IT solutions effortlessly.&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;
              Interactive Elements: Interactive Elements for better user experience."
              ghLink="https://github.com/PranavDeshmukh233/IT-Solutions"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects