import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import convertDatas from "./converDatas";

/**
 * useApi takes an url in parameters and fetchs the datas, then it calls convertDatas to format them with the right Class
 * @param {string} url
 * @returns {Object} containing the datas
 */
const useApi = (url) => {
  const [data, setDatas] = useState(undefined);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDatas(convertDatas(res, url)))
      .catch((error) => navigate("/*"));
  }, [url]);
  return data;
};

export default useApi;
