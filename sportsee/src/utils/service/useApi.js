import { useEffect, useState } from "react";
import convertDatas from "./converDatas";

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
