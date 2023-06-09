import React, { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  validation?: (value: string) => boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const { validation, label, name } = props
  
  const [error, setError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if(!!validation){
      setError(!validation(inputValue))
    }

  };

  return (
    <div className="flex flex-col gap-1">
     
      <label className={'text-xs text-bordo-400 font-light px-5'} htmlFor={name}>{error ? '*There’s an error' : label}</label>
      <input
        className={`border-1 shadow-sm rounded-2xl h-10 py-3 px-5 text-sm font-medium placeholder:text-white-300 placeholder:font-semibold ${
          error
            ? "border-bordo-400"
            : "bg-white-500"
        }`}
        onChange={handleInputChange}
        {...props}
      />
    </div>
  );
};
