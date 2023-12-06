'use client';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface IProps
  extends DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    UseControllerProps {
  defaultValue?: string;
  name: string;
}

export const Select = ({
  children,
  name,
  defaultValue,
  control,
  ...props
}: IProps) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <select
      {...field}
      {...props}
      className='min-w-[100px] rounded-xl bg-gray-40 p-2 outline-0 transition-all hover:bg-[rgba(86,88,105,.7)]'
    >
      {children}
    </select>
  );
};
