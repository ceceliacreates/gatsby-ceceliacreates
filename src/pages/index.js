import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import AvatarImage from "../components/avatarImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hey there!{" "}
      <span role="img" aria-label="hand-waving">
        👋
      </span>
    </h1>
    <p>Thanks for stopping by. You may know me as:</p>
    <ul>
      <li>
        a Success Engineer at{" "}
        <a
          href="http://www.cypress.io"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Cypress
        </a>
      </li>
      <li>
        the blue-haired{" "}
        <Link
          to="/speaking"
          style={{
            color: `#60BBCD`,
            textDecoration: `none`,
          }}
        >
          speaker from a tech meetup or webinar
        </Link>
      </li>
      <li>
        a member of the{" "}
        <a
          href="http://www.outintech.com"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Out In Tech
        </a>{" "}
        Atlanta leadership team
      </li>
      <li>
        a track ambassador for{" "}
        <a
          href="https://www.womenwhocode.com/frontend"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Women Who Code Front End
        </a>
      </li>
      <li>a pretty cool podcast guest</li>
      <li>
        ceceliacreates on{" "}
        <a
          href="https://www.twitter.com/ceceliacreates"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://www.github.com/ceceliacreates"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          GitHub
        </a>
        , and{" "}
        <a
          href="https://www.twitch.tv/ceceliacreates"
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Twitch
        </a>
      </li>
    </ul>
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <AvatarImage />
    </div>
    <div style={{ textAlign: "center" }}>
      <p>
        <span role="img" aria-label="finger-pointing-up">
          ☝️
        </span>{" "}
        (It me)
      </p>
      <p>
        You can message me on any of the above platforms or{" "}
        <a
          href="http://eepurl.com/cyajLH"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          subscribe to my newsletter here!
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
