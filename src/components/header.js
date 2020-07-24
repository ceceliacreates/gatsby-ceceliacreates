import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Link id="site-title" to="/">
      {siteTitle}
    </Link>
    <h3 id="site-description">{siteDescription}</h3>
    <h5>
      <Link
        activeStyle={{
          margin: "0.25em",
          fontSize: "1.5em",
        }}
        class="menu-link"
        to="/"
      >
        <span role="img" aria-label="home">
          🏡
        </span>{" "}
        Home
      </Link>{" "}
      <Link
        activeStyle={{
          margin: "0.25em",
          fontSize: "1.5em",
        }}
        class="menu-link"
        to="/faq"
      >
        <span role="img" aria-label="woman-raising-one-hand">
          🙋🏽‍♀️
        </span>{" "}
        FAQ
      </Link>{" "}
      <Link
        activeStyle={{
          margin: "0.25em",
          fontSize: "1.5em",
        }}
        class="menu-link"
        to="/speaking"
      >
        <span role="img" aria-label="cheering-megaphone">
          📣
        </span>{" "}
        Speaking
      </Link>
      {/* <Link
        activeStyle={{
          margin: "0.25em",
          fontSize: "1.5em",
        }}
        class="menu-link"
        to="/resources"
      >
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        Resources
      </Link>{" "} */}
    </h5>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
