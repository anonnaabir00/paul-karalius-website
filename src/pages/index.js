import React, {Component} from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import Header from "../components/header";
import Gallery from "../components/gallery";
import CarouselSlider from "../components/carousel";

import '../css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

  

class IndexPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        output: <CarouselSlider />,
      }
    }
  
  changeView = () => {
    console.log("Alhamdulillah, view changed")
    this.setState({output: <Gallery />})
  }

  render() {
    return (
      <div class="container-fluid">
          <div class="row flex">
          <div class="col-2">
          <Header />
            <a href="#" onClick={this.changeView}>
            <h4 class="fixed-bottom">SHOW THUMBNAILS</h4>
            </a>
          </div>
          <div class="col-10">
            {this.state.output}
          </div>
          
          </div>
          </div>
      );
  }
}

  export default IndexPage;