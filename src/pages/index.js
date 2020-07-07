import React, {Component} from "react"
import { Link } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import Header from "../components/header";
import Gallery from "../components/gallery";
import CarouselSlider from "../components/carousel";

import '../css/bootstrap.min.css';

  

class IndexPage extends Component {
    constructor(props) {
      super(props)
      this.child = React.createRef();      
      this.state = {
        output: <CarouselSlider ref={this.child}/>,
      }
    }
  
  changeView = () => {
    console.log("Alhamdulillah, view changed")
    this.setState({output: <Gallery />})
  }

  nextImage = () => {
    this.child.current.nextSlide();
  }

  render() {
    return (
      <div class="container-fluid">
          <div class="row flex">
          <div class="col-2">
          <Header />
          <div class="footer-controls">
          <div class="col-8">
          <a href="#" onClick={this.nextImage}>Next Slide</a>
          <a href="#" onClick={this.changeView}>SHOW THUMBNAILS</a>
          </div>
          <div class="col-12">
          <a href="#" onClick={this.nextImage}>Prev Slide</a>
          </div>
          </div>
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