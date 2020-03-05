import React from "react";

export default function Minus(props) {
  const {
    size = 28,
    color = "#3E008D",
    onClick = () => {},
    disabled = false,
    className = ""
  } = props;
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={disabled ? "#7F7F7F" : color}
      onClick={disabled ? () => {} : onClick}
      className={`plus_minus_buttons ${className}`}
    >
      <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm112 277.332031h-224c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h224c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
    </svg>
  );
}
