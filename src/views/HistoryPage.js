import React, {useState, useEffect} from 'react'
import SingleHistory from './SingleHistory'

const HistoryPage = () => {
    const [quarter, setQuarter] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9170/api/v1/incident/quarter")
          .then((data) => data.json())
          .then((data) => setQuarter(data));
      }, []);
    

    return (
        <div>
            <SingleHistory/>   
        </div>
    )
}

export default HistoryPage
