import React from "react";
import "./incidentHistory.css";

const IncidentHistory = (props) => {
  return (
    <div className="pl-5">
      <hr />
      <div className="incident-text-box py-3">
        <h5>Incident on {props.date || new Date().toDateString()}</h5>
        <p>{props.incidentStatus || "The incident has been resolved"}</p>
        <span className="text-secondary">
          {props.range || new Date().toDateString()}
        </span>
      </div>
    </div>
  );
};

export default IncidentHistory;
