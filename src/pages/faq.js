import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import faqs from "../data/faqs.json";

const FAQPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Frequently Asked Questions <span role="img" aria-label="raising-hand">🙋</span></h1>
    {faqs.map(faq => {
      return(
        <div key={faq.id}>
          <h5>{faq.question}</h5>
          <p>{faq.answer}</p>
          {(faq.link ? <p>Link: <a href={faq.link} target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>{faq.link}</a></p> : null)}
        </div>
      )
    })}
    <p>Don't see your question? Message me on <a href="https://www.twitter.com/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>Twitter</a>, <a href="https://www.github.com/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>GitHub</a>, and <a href="https://www.twitch.tv/ceceliacreates" target="blank" style={{textDecoration: 'none', color: '#60BBCD'}}>Twitch</a></p>
  </Layout>
)

export default FAQPage