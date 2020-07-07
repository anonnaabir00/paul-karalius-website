import React, { Component } from "react";
import { graphql } from 'gatsby';
import { Link } from "gatsby"


//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import Header from "../components/header";
import Gallery from "../components/gallery";
import CarouselSlider from "../components/carousel";

import '../css/bootstrap.min.css';


    const ProjectType = ({data}) => {
      return (
        <div class="container-fluid">
          <div class="row flex">
          <div class="col-2">
          <Header />
          </div>
          <div class="col-10">
          <div class="row flex image-works">
          {data.allWordpressWpPortfolio.nodes.map(portfolio =>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <a target="_blank" href={portfolio.acf.image.localFile.childImageSharp.fluid.srcWebp}>
                                  <div class="thumbnail">
                                  <img src={portfolio.acf.image.localFile.childImageSharp.fluid.srcWebp} alt={portfolio.acf.project_name} width="100%" height="330" class='gallery-image' />
                                  </div>
                                  </a>
              </div>
          )}
          </div>
          </div>
          
          </div>
          </div>
      )
    }

      export const query = graphql`
      query CategoryPortfolio ($category_id: Int) {
        allWordpressWpPortfolio(filter: {project_type: {eq: $category_id}}) {
          nodes {
            title
            slug
            acf {
              project_name
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
      `

export default ProjectType;