import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';

class Gallery extends Component {
    render(){
        return(
            <StaticQuery
            query={graphql`
            query SiePortfolio {
                allWordpressWpPortfolio {
                  nodes {
                    acf {
                      project_name
                      image {
                        source_url
                      }
                    }
                  }
                }
              }
            `}

            render={data => (
                <div>
                <div class="responsive">
                    <div class="gallery">
                    {console.log ('Gallery Items')}
                        {console.log (data.allWordpressWpPortfolio.nodes)}
                        {data.allWordpressWpPortfolio.nodes.map(portfolio => {
                            console.log(portfolio.acf.project_name)
                            console.log(portfolio.acf.image.source_url)
                            return(
                                <img src={portfolio.acf.image.source_url} alt={portfolio.acf.project_name} width="600" height="400" />
                            )})}
                        <a target="_blank" href="img_5terre.jpg">
                        </a>
                    </div>
                </div>
                
                <div class="clearfix"></div>
            </div>
            )}
              
            />
        )
    }
}

export default Gallery