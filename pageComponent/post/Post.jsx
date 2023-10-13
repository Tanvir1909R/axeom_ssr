import React from "react";
import "./post.scss";

const Post = () => {
  return (
    <div className="container">
      <div className="post_wrapper">
        <h1>Latest post. Don’t miss it.</h1>
        <div className="posts">
            <div className="post">
                <div className="post_img">
                    <img src="./images/post.webp" alt="post" />
                </div>
                <div className="post_desc">
                    <span>Technology</span>
                    <h3>Machine Learning Terms every manager should know</h3>
                    <p>This Machine Learning Glossary aims to briefly introduce the most important Machine Learning terms - both for the commercially and...</p>
                    <a href="/">Read more</a>
                </div>
            </div>
            <div className="post">
                <div className="post_img">
                    <img src="./images/post.webp" alt="post" />
                </div>
                <div className="post_desc">
                    <span>Technology</span>
                    <h3>Machine Learning Terms every manager should know</h3>
                    <p>This Machine Learning Glossary aims to briefly introduce the most important Machine Learning terms - both for the commercially and...</p>
                    <a href="/">Read more</a>
                </div>
            </div>
            <div className="post">
                <div className="post_img">
                    <img src="./images/post.webp" alt="post" />
                </div>
                <div className="post_desc">
                    <span>Technology</span>
                    <h3>Machine Learning Terms every manager should know</h3>
                    <p>This Machine Learning Glossary aims to briefly introduce the most important Machine Learning terms - both for the commercially and...</p>
                    <a href="/">Read more</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
