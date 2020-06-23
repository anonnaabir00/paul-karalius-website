import React, {Component} from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import Header from "../components/header";
import Gallery from "../components/gallery";

import '../css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class IndexPage extends Component {  
  render() {
    return (
        <Container fluid>
          <Row>
          <Col>
          <Header />
            </Col>
            <Col>
            <Gallery />
            </Col>
            </Row>
        </Container>
      
      );
  }
}

  export default IndexPage;