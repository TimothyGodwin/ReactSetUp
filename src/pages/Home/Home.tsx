import React from 'react';
import { useApi } from '../../services/axios/useApi';

const Home: React.FC = () => {
  const { data, loading, error } = useApi({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET',
  });

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>Data from GET request:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Home;
