import React, { useEffect, useState } from "react";
import { format, getDay } from "date-fns";
import { NavLink } from "react-router-dom";

function Incident() {
  const [incident, setincident] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4567/incident/incidents")
      .then(data => data.json())
      .then(data => setincident(data));
  }, []);

  return (
    <>
      {console.log({"incident": incident})}

      <h3 className="py-5">Past Incidents</h3>
      <div>

        {incident.map((val, i) => {
          return (
            <>
              {" "}
              
             <td style={{ color: val.currentStatus === "Operational"? "green": "red", border: "none" }}></td>
              {/* {console.log(getDay(Date.parse(val.updates[0].datePosted)))} */}
              {
                <h5>
                  {format(Date.parse(val.updates[0].datePosted), "dd/MM/yyyy")}
                </h5>
              }
              <h6>{val.updates[0].title}</h6>
              <span className="pt-5 text-secondary">{val.updates[0].message}</span>
              <hr />
            </>
          );
        })}
      </div>
      <div>&larr;<NavLink className="pb-4" to="">
        incident History
      </NavLink></div>
      
    </>
  );
}

export default Incident;
