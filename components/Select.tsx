import { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: {
    name: string;
    value: string;
  }[];
  className?: string;
  label?: string;
}

export const Select = ({ items, label, className, ...rest }: SelectProps) => {
  return (
    <select
      id='select'
      className={`bg-transparent w-full border-b border-b-red-600 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-700 focus:outline-none focus:ring-red-700 sm:text-sm ${className}`}
      {...rest}
    >
      {label ? (
        <option className='text-[#0217344d]' value=''>
          {label}
        </option>
      ) : null}
      {items.map((item, i) => (
        <option value={item.value} key={i}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
