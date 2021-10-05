import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return data;
};

export const PostData = (data, url) => {
  useEffect(() => {
    // PUT request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch(url, requestOptions)
        .then(response => response.json());
// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

}

export default useData;
