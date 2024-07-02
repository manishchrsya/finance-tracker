import { useCallback } from "react";
import { API_HOST } from "../constant/api";

const useNetwork = () => {
  const handleFetch = useCallback(async (url: string, options = {}) => {
    try {
      const response = await fetch(`${API_HOST}/${url}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }, []);

  const get = useCallback(
    async (endpoint: string) => {
      return await handleFetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [handleFetch]
  );

  const post = useCallback(
    async (endpoint: string, body: any) => {
      return await handleFetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },
    [handleFetch]
  );

  const patch = useCallback(
    async (endpoint: string, body: any) => {
      return await handleFetch(endpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },
    [handleFetch]
  );

  const remove = useCallback(
    async (endpoint: string) => {
      return await handleFetch(`endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    [handleFetch]
  );

  return { get, post, patch, remove };
};

export default useNetwork;
