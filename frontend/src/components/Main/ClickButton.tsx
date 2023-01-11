import React from 'react';

const ClickButton = () => {
  const Click = () => {
    console.log('click!');
  };
  return (
    <div>
      <button onClick={Click}>ClickButton</button>
    </div>
  );
};

export default ClickButton;
