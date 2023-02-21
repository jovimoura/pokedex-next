import { MagnifyingGlass } from "phosphor-react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...rest }: Props) => {
  return (
    <input
      type='text'
      className={`w-full appearance-none border-b border-b-red-600 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-700 focus:outline-none focus:ring-red-600 sm:text-sm dark:placeholder:text-gray-100 ${
        className ?? ""
      }`}
      {...rest}
    />
  );
};
