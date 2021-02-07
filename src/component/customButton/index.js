import React from 'react';
import "./CustomButton.css"

const CustomButton = ({openMessage, collapseMessage, handleClick}) => {
    return (
        <div className="incidentButton" onClick={handleClick}>
            {openMessage || collapseMessage|| ""}
        </div>
    )
}

export default CustomButton
