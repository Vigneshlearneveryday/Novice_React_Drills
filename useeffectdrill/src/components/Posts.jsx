import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  //UseState
  const [posts, setPosts] = useState([]);
  const [loading, setIsloading] = useState(true);
  const [Error, setError] = useState(null);

  //UseEffect
  useEffect(() => {
    // Make HTTP Request
    axios
      .get(URL)
      .then((post) => {
        //Update useState
        setIsloading(false);
        //Update the post here
        setPosts(post.data);
      })
      .catch((err) => {
        setError(err);
        setIsloading(false);
      });
  }, []);

  if (loading)
    return (
      <div style={{ color: "green", textAlign: "center" }}>
        <h1>Loading......</h1>
      </div>
    );
  if (Error)
    return (
      <div style={{color:'red', textAlign:'center'}}>
        <h1>Network Error</h1>
      </div>
    );

  return (
    <div>
      <h1>Network Request</h1>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
