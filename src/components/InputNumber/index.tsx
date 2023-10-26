import React, { InputHTMLAttributes, forwardRef } from "react";

export interface InputNumberType extends InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string;
  classNameError?: string;
  errorMessage?: string;
}

const InputNumber = forwardRef<HTMLInputElement, InputNumberType>(
  function InputNumberInner(
    {
      className,
      errorMessage,
      classNameInput = "w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm",
      onChange,
      ...rest
    },
    ref
  ) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if ((/^\d+$/.test(value) || value === "") && onChange) {
        onChange(event);
      }
    };
    return (
      <div className={className}>
        <input
          className={classNameInput}
          onChange={handleChange}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

export default InputNumber;
