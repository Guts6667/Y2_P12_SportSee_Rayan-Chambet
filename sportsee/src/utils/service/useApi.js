import { useEffect, useState } from "react";
import convertDatas from "./converDatas";
// useApi takes a url in parameters and fetchs the datas, then it calls convertDatas to format them with the right Class
const useApi = (url) => {
  const [data, setDatas] = useState(undefined);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDatas(convertDatas(res, url)));
  }, [url]);
  return data;
};

export default useApi;
