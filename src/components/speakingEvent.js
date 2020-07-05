import React from "react"
import PropTypes from "prop-types"

const SpeakingEvent = ({ event }) => (
  <div key={event.id}>
    <h2>
      <a
        href={event.link}
        target="blank"
        style={{ textDecoration: "none", color: "#60BBCD" }}
      >
        <span role="img" aria-label="video-camera">
          📹
        </span>{" "}
        {event.title}
      </a>
    </h2>
    {event.slides ? (
      <h4>
        <a
          href={event.slides}
          target="blank"
          style={{ textDecoration: "none", color: "#60BBCD" }}
        >
          Slides
        </a>
      </h4>
    ) : null}
    <p>{event.description}</p>
    {event.image ? <img src={event.image} style={{ maxWidth: 500 }} /> : null}
  </div>
)

SpeakingEvent.propTypes = {
  event: PropTypes.node.isRequired,
}

export default SpeakingEvent
