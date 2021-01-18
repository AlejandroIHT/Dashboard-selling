import React from 'react';

const Board = ({ children, id, className }) => {
  /** Actions drop and drag containers */
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
  };

  /** Actions drop and drag containers */
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id={id} className={className} onDrop={drop} onDragOver={dragOver}>
      {children}
    </div>
  );
};

export default Board;
