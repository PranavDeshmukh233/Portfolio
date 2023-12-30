import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import resume from '../assets/Pranav Deshmukh 3/Pranav Deshmukh 3-1.jpg'
import resume2 from '../assets/Pranav Deshmukh 3/Pranav Deshmukh 3-2.jpg'

import Particle from '../components/Particle'
import pdf from "../assets/Pranav Deshmukh 3.pdf"

const Resume = () => {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <img src={resume}
          alt="resume"
          className="resume1"
          style={{maxWidth:"800px"}}
          />
        </Row>
        <Row className="resume">
          <img src={resume2}
          alt="resume"
          className="resume1"
          style={{maxWidth:"800px"}}
          />
        </Row>

      </Container>
    </div>
  )
}

export default Resume