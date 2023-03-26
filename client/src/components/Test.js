import { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/profile").then(
      response => {
        setData(response.data);
        console.log(response.data);
      }
    ).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>
      <h2>Test Data:</h2>
      {typeof data === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{data.name}</p>
          <p>{data.about}</p>
        </>
      )}
    </div>
  );
}

export default Test;