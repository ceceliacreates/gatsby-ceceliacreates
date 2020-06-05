import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import events from "../data/speaking.json"

const SpeakingPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Speaking <span role="img" aria-label="raising-hand">🙋</span></h1>
    {events.map(event => {
      return(
        <div key={event.id}>
          <h3><a href={event.link} target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>{event.title}</a></h3>
          <p>{event.description}</p>
          {event.image? <img src={event.image} style={{maxWidth: 500}} /> : null}
          {event.slides? <h5><a href={event.slides} target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>Slides</a></h5> : null}
          </div>
      )
    })}
    <p>Want to team up for an event? Message me on <a href="https://www.twitter.com/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>Twitter</a>, <a href="https://www.github.com/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>GitHub</a>, and <a href="https://www.twitch.tv/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>Twitch</a></p>
  </Layout>
)

export default SpeakingPage