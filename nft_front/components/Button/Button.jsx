import React from "react";

//INTERNAL IMPORT

const Button = ({ btnName, handleClick }) => {
  return (
    <div >
      <button className=' background-color var(--icons-color)
    padding 1rem 2rem
    border 1px solid var(--icons-color)
    border-radius 2rem
    font-size 1.1rem
    color var(--shadow-light-color)
    cursor pointer
    transition  all .2s ease-in
    box-shadow var(--box-shadow)' onClick={() => handleClick()}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;