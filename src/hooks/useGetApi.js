import { useState, useCallback, useEffect } from "react";
import { api } from "../services/apiBase";

export default function useGetApi(url) {
  const [data, setData] = useState();

  const loadData = useCallback((url) => {
    api
      .buildApiGetRequest(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadData(url);
  }, [url, loadData]);

  return { data };
}
