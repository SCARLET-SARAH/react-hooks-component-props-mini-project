import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date || "April 24 2024"}
          preview={post.preview}
          minutesToRead={post.minutesToRead}
        />
      ))}
    </main>
  );
}

export default ArticleList;