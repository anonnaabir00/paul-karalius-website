import React, {Component} from "react"
import { Link, StaticQuery } from "gatsby"

//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"

import Header from "./header";

import '../css/bootstrap.min.css';

  

class ProjectList extends Component {

  render() {
    return (
        <StaticQuery 
        query={graphql`
        query ProjectList {
          allWordpressWpProjectType {
            nodes {
              id
              name
              path
              slug
              wordpress_id
            }
          }
        }
       
    `}
        render={data => (
          <div>
            {data.allWordpressWpProjectType.nodes.map(ptype => {
              return(
                <a href={ptype.slug}>{ptype.name}</a>
              )})}
              </div>
        )}
        />
      );
  }
}

  export default ProjectList;