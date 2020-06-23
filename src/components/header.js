//import { Link } from "gatsby"
//import PropTypes from "prop-types"

import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby';
import '../css/bootstrap.min.css';
import '../css/style.css';


class Header extends Component {
  
  // responsiveTrack = () => {
  //   var x = document.getElementById("header-navigation");
  //     if (x.className == "topnav") {
  //         x.className += " responsive";
  //         console.log('Class Changed');
  // } else {
  //   //x.className = "vertical-menu";
  //   console.log('Class Not Changed');
  // }
  // };

    showDropdown = () => {
      document.getElementById("show-dropdown").style.display = "block";
      console.log('Alhamdulillah. It works.')
    }

    render() {
      return (
        <StaticQuery 
        query={graphql`
        query SiteMenu {
          allWordpressWpMenu {
            nodes {
              title
              url
            }
          }
        }
        `}
        render={data => (
          <div>
          <div class="desktop-menu" id="header-navigation">
            {data.allWordpressWpMenu.nodes.map(menus => {
              return(
                <a href={menus.url}>{menus.title}</a>
              )})}
          </div>
          <div class="mobile-menu">
            <a href="#" class="icon" onClick={this.showDropdown}>Menu</a>
            <ul class="mobile-dropdown" id="show-dropdown">
            {data.allWordpressWpMenu.nodes.map(menus => {
              return(
                <li><a href={menus.url}>{menus.title}</a></li>
              )})}
            </ul>
            </div>
  </div>
        )}
        />

        );
    }
  }

 
  export default Header;
