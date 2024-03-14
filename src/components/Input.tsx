import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, props>(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={twMerge(
          `block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40`,className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
