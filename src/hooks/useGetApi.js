import { useState, useCallback, useEffect } from "react";

export default function useGetApi(url) {
  const [data, setData] = useState();

  const loadData = useCallback((url) => {
    fetch(url)
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
