import React, { useState, useEffect } from "react";

function Website() {
  const [website, setWebsite] = useState([]);

  const fetchServices = url => {
    fetch(url)
      .then(data => data.json())
      .then(data => setWebsite(data));
  };

  useEffect(() => {
    let uri = "http://localhost:9170/api/v1/websites";
    fetchServices(uri);
  }, []);

  console.log(website);

  return (
    <>
      {website.map((val, index) => {
        return (
          <>
            <table class="table table-bordered m-auto">
              <tbody>
                <tr className="d-flex justify-content-between">
                  <td style={{ border: "none" }}>{val.name}</td>
                  <td
                    style={{
                      color:
                        val.currentStatus === "Operational" ? "green" : "red",
                      border: "none"
                    }}
                  >
                    {val.currentStatus}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </>
  );
}

export default Website;
