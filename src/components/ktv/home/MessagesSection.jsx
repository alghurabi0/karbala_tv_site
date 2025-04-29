import React from "react";

function MessagesSection() {
  return (
    <>
      <section className="messages-section">
        <img src="/images/header.png" className="messages-header" />
        <div className="messages"></div>
      </section>
    </>
  );
}

export default MessagesSection;

function Message() {
  return (
    <>
      <div className="message"></div>
    </>
  );
}
