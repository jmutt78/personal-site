import React from "react";
import styled from "styled-components";

export const ModalStyle = styled.div`
  height: 600px;
  width: auto;
  overflow: hidden;
`;

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }

  render() {
    return (
      <ModalStyle
        className="calendly-inline-widget"
        data-url="https://calendly.com/jgmsoftware/15min?hide_event_type_details=1"
      />
    );
  }
}

export default Calendly;
