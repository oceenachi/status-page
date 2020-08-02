import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { NavLink } from "react-router-dom";

function Incident() {
  const [incident, setincident] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9170/api/v1/incident/past")
      .then((data) => data.json())
      .then((data) => setincident(data));
  }, []);

  return (
    <>
      <h3 className="py-5">Past Incidents</h3>
      <div>
        {console.log({ "incident values ": Object.values(incident) })}

        {Object.values(incident).map((val, i) => {
          return (
            <>
              <h4>{format(Date.parse(val[0].time), "dd/MM/yyyy")}</h4>
              <>
                {val.map((value, i) => {
                  return (
                    <>
                      val.length === 0 ? ( "No incidents reported today" ) : (
                      <div>
                        <h6 className="p3-5 text-warning">
                          {" "}
                          {"Incident on " + value.time}
                        </h6>
                        <span
                          className="p2-6 text-black"
                          style={{
                            color:
                              value.incidentStatus === "Investigating"
                                ? "#e49a20"
                                : value.incidentStatus === "Resolved"
                                ? "#76cb19"
                                : "#1d1e1c",
                          }}
                        >
                          {" "}
                          {value.incidentStatus}
                        </span>
                        <span className="p3-5 text-secondary">
                          {" "}
                          {" - " + value.message}
                        </span>
                      </div>
                    </>
                  );
                })}
                <hr />
              </>
            </>
          );
        })}
      </div>
      <div>
        &larr;
        <NavLink className="pb-4" to="">
          incident History
        </NavLink>
      </div>
    </>
  );
}

export default Incident;
