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
          <p class="service-info">
            Here, SHRUB can identify your client by some ID that you've
            provided, which is stored in a database. This allows you to add an
            additional check that can do many things, such as check the client's
            service contract for validity or issues, or even pull up the
            client's known hardware configuration which can then be ingested by
            SHRUB to give more targeted answers. In this demo, all the service
            number does for the moment is allow SHRUB to know the name of your
            client so she can greet them properly.
          </p>
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
      </div>
    );
  }
}
