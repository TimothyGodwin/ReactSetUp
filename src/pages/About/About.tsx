import React, { useState, useEffect } from 'react';
import { useApi } from '../../services/axios/useApi';

const PostExample: React.FC = () => {
  const [postData, setPostData] = useState({});
  const [isMounted, setIsMounted] = useState(true);
  

  const { data, loading, error } = useApi({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    requestData: postData,
  });

  const handlePostDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({ title: event.target.value });
  };

  const handleFetchData = () => {
    // Trigger the POST request when the button is clicked
    // The POST data is determined by the state
  };

  useEffect(() => {
    // Check if the component is still mounted
    if (isMounted) {
      handleFetchData(); // Trigger the POST request
    }

    // Cleanup function to set isMounted to false when unmounting
    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        onChange={handlePostDataChange}
      />
      <button onClick={handleFetchData}>Fetch Data</button>
     
      {data ? (
        <div>
          <h2>Data from POST request:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default PostExample;
