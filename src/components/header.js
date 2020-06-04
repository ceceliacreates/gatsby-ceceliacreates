import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `#60BBCD`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3
        style={{
          fontStyle: 'italic'
        }}
      >{siteDescription}</h3>
    </div>
    <div 
    style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem .5rem`,
        textAlign: 'center'
      }}>
    <h5 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >Home</Link> ||  
         <Link
          to="/faq"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        > FAQ</Link>
        ||  
         <Link
          to="/speaking"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        > Speaking</Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
