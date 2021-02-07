import React, { useState, useEffect } from "react";
import CustomButton from "../component/customButton";
import IncidentHistory from "../component/incidentHistory";

const SingleHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(3);
  const [message, setMessage] = useState("");

  
  const handleClick = (length) => {
    if (!isOpen) {
        setData(length);
    }
     else {
         setData(3);
    }
  };

  return (
    <div>
      {"date" || new Date().toDateString}
      <IncidentHistory />
      <CustomButton onClick={handleClick} length={"length"} message={message} />
    </div>
  );
};

export default SingleHistory;
