import { useCallback } from "react";
import { API_HOST } from "constant";

interface FetchResponse<T = any> {
  data?: T;
  status: number;
  message?: string;
}

const useNetwork = () => {
  const handleFetch = useCallback(
    async (url: string, options = {}): Promise<FetchResponse> => {
      try {
        const response = await fetch(`${API_HOST}/${url}`, options);
        const data = await response.json();
        return { data, status: response.status, message: "ok" };
      } catch (error) {
        const typedError = error as Error;
        return { status: 500, data: typedError.message };
      }
    },
    []
  );

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
