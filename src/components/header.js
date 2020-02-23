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
        padding: `1.45rem 1.0875rem`,
        textAlign: 'center'
      }}
    >
      <h1 style={{ margin: 1 }}>
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
          fontStyle: 'italic',
          margin: 1
        }}
      >{siteDescription}</h3>
      {/* <h5 style={{ margin: 0 }}>
        <Link
          to="/portfolio"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >Portfolio</Link>
      </h5> */}
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
