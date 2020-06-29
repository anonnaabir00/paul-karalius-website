import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../css/bootstrap.min.css';

class Gallery extends Component {
    render(){
        return(
            <StaticQuery
            query={graphql`
            query SitePortfolioGallery {
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
                  <div class="row flex image-works">
                        {data.allWordpressWpPortfolio.edges.map(portfolio => {
                            return(
                                  <div class="col-lg-4 col-md-4 col-sm-6">
                                  <a target="_blank" href={portfolio.node.acf.image.localFile.childImageSharp.fluid.srcWebp}>
                                  <div class="thumbnail">
                                  <img src={portfolio.node.acf.image.localFile.childImageSharp.fluid.srcWebp} alt={portfolio.node.acf.project_name} width="100%" height="330" class='gallery-image' />
                                  </div>
                                  </a>
                                  
                                  </div>
                            )})}
            </div>
            
            )}
              
            />
        )
    }
}

export default Gallery