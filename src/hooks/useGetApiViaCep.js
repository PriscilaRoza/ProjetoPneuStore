import { useState, useCallback, useEffect } from "react";
import { apiViaCep } from "../services/apiViaCep";

export default function useGetApiViaCep(url) {
  const [dataCep, setDataCep] = useState();

  const loadData = useCallback((url) => {
    apiViaCep
      .buildApiGetRequest(url)
      .then((response) => response.json())
      .then((response) => {
        setDataCep(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    loadData(url);
  }, [url, loadData]);

  return { dataCep };
}
