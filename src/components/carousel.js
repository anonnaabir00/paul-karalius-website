import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';

import '../css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

class CarouselSlider extends Component {
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
                        <Carousel
                        nextLabel='Next'
                        wrap={true}
                        className="carousel-fade"
                        >
                        {data.allWordpressWpPortfolio.edges.map(portfolio => {
                            return(
                                <Carousel.Item>
                                <img
                                className="carousel-image"
                                src={portfolio.node.acf.image.localFile.childImageSharp.fluid.srcWebp}
                                alt={portfolio.node.acf.project_name}
                                    />
                                 </Carousel.Item>
                            )})}
            </Carousel>
            )}
              
            />
        )
    }
}

export default CarouselSlider