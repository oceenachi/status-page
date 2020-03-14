import React from "react";
import Header from "../component/Header/Header";
import Bar from "../component/Bar/Bar";
import Incident from "../component/Incidents/Incidents";
import Website from "../component/Websites/Website";
import Footer from "../component/Footer/Footer";

function StatusPage() {
  return (
    <>
      <div className="container" style={{ maxWidth: "930px" }}>
        <Header />
        <Bar />
        <Website />
        {/* <Website />
        <Website />
        <Website /> */}
        <Incident />
        <Footer />
      </div>
    </>
  );
}

export default StatusPage;
