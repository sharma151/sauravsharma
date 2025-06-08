import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        overflow: "hidden",
      }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{ width: "100%", overflow: "auto" }}>
        <div
          style={{
            width: "100%",
            minWidth: "300px",
            transform: "scale(1)",
            transformOrigin: "top left",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <GitHubCalendar
            username="sharma151"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </div>
    </Row>
  );
}

export default Github;
