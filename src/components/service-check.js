import React from "react";

import "./service-check.css";

export default class ServiceCheck extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const entry = this.textInput.value;
    this.props.submitServiceNumber(entry);
  }

  render() {
    return (
      <div>
        <form id="service-check" onSubmit={e => this.onSubmit(e)}>
          <span id="svc-text">
            Please enter your service number to continue
          </span>
          <input
            type="text"
            name="svc-entry"
            id="svc-entry"
            placeholder="ABC123"
            ref={input => (this.textInput = input)}
          />
          <button type="submit" className="svc-sub">
            Submit
          </button>
          {this.props.invalidNumber ? (
            <span className="error-message">
              Sorry, could not find your number. Please try again
            </span>
          ) : null}
          {this.props.error ? (
            <span className="error-message">{this.props.error}</span>
          ) : null}
        </form>
        <div className="tip-box">
          <p>
            For a demo, use the service number <b>654ZYX</b>.{" "}
          </p>
          <p>
            This number is tied to a user account, and for this demo, you get to
            be Bob Belcher!
          </p>
        </div>
        <p className="service-info">
          Note: Here, SHRUB can identify your client, allowing a check that can
          do things such as check the client's service contract or even pull up
          the client's known hardware configuration which SHRUB can use to give
          more targeted answers. In this demo, the service number allows SHRUB
          to know the clients name only.
        </p>
      </div>
    );
  }
}
