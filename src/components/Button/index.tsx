/** @format */

import React from "react";

interface ButtonType {
  className: string;
  contentButton?: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ className, contentButton, onClick }: ButtonType) {
  return (
    <button className={className} onClick={onClick}>
      {contentButton}
    </button>
  );
}