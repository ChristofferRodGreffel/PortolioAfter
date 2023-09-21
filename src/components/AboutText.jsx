import { useState, useEffect } from "react";
import parse from "html-react-parser";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutText() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://wp.chrisrg.dk/wp-json/wp/v2/posts?_embed&categories=5");
      const data = await response.json();
      setPosts(data);
    }
    getData();
  }, []);

  return (
    <>
      {posts.map((post, key) => {
        return (
          <div id="aboutText" key={key}>
            {parse(post.content.rendered)}
          </div>
        );
      })}
    </>
  );
}
