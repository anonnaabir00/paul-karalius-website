import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';


import Carousel from 'react-bootstrap/Carousel'

import RBCarousel from "react-bootstrap-carousel";
import '../css/bootstrap.css';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import Slider from "react-slick";
import '../css/slick.css';

class CarouselSlider extends Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }


  nextSlide = () => {
    console.log("Call Done");
    this.slider.slickNext();
  }

  previousSlide = () => {
    this.slider.slickPrev();
  }

    render(){
        return(
            <StaticQuery
            query={graphql`
            query SiePortfolio {
            allWordpressWpPortfolio {
              edges {
                node {
                  acf {
                    image {
                      localFile {
                        childImageSharp {
                          fluid (webpQuality: 80, maxWidth:1458) {
                            srcWebp
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
              
            `}

            render={data => (
                          <div>
                          <Slider
                          ref={c => (this.slider = c)}
                          dots={false}
                          arrows={false}
                          fade={true}
                          infinite={true}
                          speed={500}
                          slidesToShow={1}
                          slidesToScroll= {1}
                          newSlide={this.nextSlide}
                          >
                        {data.allWordpressWpPortfolio.edges.map(portfolio => {
                            return(
                                <img
                                className="carousel-image"
                                src={portfolio.node.acf.image.localFile.childImageSharp.fluid.srcWebp}
                                alt={portfolio.node.acf.project_name}
                                    />
                            )})}
                            </Slider>
              </div>
            )}
              
            />
        )
    }
}

export default CarouselSlider