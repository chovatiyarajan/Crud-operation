import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    } catch (e) {
      console.error("fetch error", e);
      setLoading(false);
    }
  }, [url]);

  return { data, loading };
};

export default useFetch;
