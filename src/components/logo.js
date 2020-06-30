//import { Link } from "gatsby"
//import PropTypes from "prop-types"

import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';

class Logo extends Component {
    render(){
        return(
            <StaticQuery
            query={graphql`
        query SiteLogo {
            file(relativePath: {eq: "logo.jpg"}) {
                childImageSharp {
                  fluid {
                    srcWebp
                  }
                }
              }
            }
        `}
            
        render={data => (
            <img src={data.file.childImageSharp.fluid.srcWebp} />
        )}

        />
        )
    }
}

export default Logo