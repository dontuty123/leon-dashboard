/** @format */

import React from "react";

interface ButtonType {
  disabled?: boolean;
  className: string;
  contentButton?: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({
  className,
  contentButton,
  onClick,
  disabled,
}: ButtonType) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {contentButton}
    </button>
  );
}
