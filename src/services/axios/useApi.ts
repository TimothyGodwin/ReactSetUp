import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface UseApiProps<T> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  initialData?: T;
  requestData?: object; // Request data for POST and PUT
}

export const useApi = <T>({
  url,
  method,
  initialData,
  requestData,
}: UseApiProps<T>) => {
  const [data, setData] = useState<T | undefined>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<T> = await axios({
        method,
        url,
        data: requestData, // Include request data for POST and PUT requests
      });

      setData(response.data);
      setLoading(false);
    } catch (err: unknown) {
      const errorResponse = err as AxiosError;
      setError(errorResponse.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, requestData]); // Include requestData as a dependency

  return { data, loading, error };
};
