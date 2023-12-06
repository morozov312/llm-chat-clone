import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

interface IProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

export const Select = ({ children, ...props }: IProps) => {
  return (
    <select
      {...props}
      className='min-w-[200px] rounded-xl bg-gray-40 p-2 outline-0'
    >
      {children}
    </select>
  );
};
