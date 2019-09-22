import React, { useState, useEffect } from "react";
import axios from "axios"


function UseEffectHook() {
     // Initialize state to hold the image URL/ data
  const [dogPic, setDogPic] = useState("");
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('react');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      // Which we then set to state
      .then(res => setDogPic(res.data.message))
      // Always include error handling
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://hn.algolia.com/api/v1/search?query=' + query)
        .then(res => setData(res.data));
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return (
    <div className="App">
      <h1>We Love Puppers</h1>
      <img src={dogPic} alt="a random dog" />

      <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>

      </div>
      <div>
      {position.x}:{position.y}
    </div>
    </div>
  );
    
  
}


export default UseEffectHook;