import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import events from "../data/speaking.json"
import SpeakingEvent from "../components/speakingEvent"
import FooterCTA from "../components/footerCTA"

const SpeakingPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Speaking</h1>
    {events.map(event => {
      return <SpeakingEvent event={event} />
    })}
    <FooterCTA />
  </Layout>
)

export default SpeakingPage
