import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setDatas] = useState(undefined);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setDatas(res));
  }, [url]);
  return data;
};

export default useApi;
