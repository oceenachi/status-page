import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Incident() {
  const [incident, setincident] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9170/api/v1/incident/past")
      .then((data) => data.json())
      .then((data) => setincident(data));
  }, []);


  let mapper = {};
  incident.map((oneIncident) => {
    let group = oneIncident.incident_group;
    if (mapper[group]) {
      //push
      mapper[group].data.push(oneIncident);
    } else {
      let newStructure = {
        date: oneIncident.incident_time,
        data: [oneIncident],
      };

      mapper[group] = newStructure;
      console.log(Object.values(mapper));
    }
  });

  return (
    <>
      <h3 className="py-5">Past Incidents</h3>
      <div>
        {Object.values(mapper).length === 0 ? (
          <div>No incidents reported today</div>
        ) : (
          Object.values(mapper).map((value, i) => {
            return (
              <>
                <h4>{new Date(value.date).toDateString()}</h4>

                <>
                  {value.data.map((elem, i) => {
                    return (
                      <div>
                        <span
                          className="p2-6 text-black"
                          style={{
                            color:
                              elem.incident_status === "Investigating"
                                ? "#e49a20"
                                : elem.incident_status === "Resolved"
                                ? "#76cb19"
                                : "#1d1e1c",
                          }}
                        >
                          {" "}
                          {elem.incident_status}
                        </span>
                        <span className="p3-5 text-secondary">
                          {" "}
                          {" - " +
                            elem.message.charAt(0).toUpperCase() +
                            elem.message.slice(1)}
                        </span>
                      </div>
                    );
                  })}
                  <hr />
                </>
              </>
            );
          })
        )}
      </div>
      <div>
        
        <NavLink className="pb-4" to="/history">
        &larr; incident History
        </NavLink>
      </div>
    </>
  );
}

export default Incident;
