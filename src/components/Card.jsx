import React from 'react';

const Card = ({ children, id, className, draggable }) => {
  /** Actions drop and drag cards */
  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData('card_id', target.id);
  };

  /** Actions drop and drag cards */
  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      className={className}
      draggable={draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {children}
    </div>
  );
};

export default Card;
