import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  const renderMinutesToRead = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    if (minutes < 30) {
      return '☕️'.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      return '🍱'.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <small>{renderMinutesToRead(minutesToRead)}</small>
    </article>
  );
}

export default Article;