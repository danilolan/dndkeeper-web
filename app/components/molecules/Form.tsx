import { ReactNode, useRef, useState } from 'react';
import React from 'react';

type FormProps<T> = {
  onSubmit: (data: T) => void;
  children: ReactNode;
  button: ReactNode;
  className?: string;
};

interface Fields {
  [key: string]: string;
}

export function Form<T>({
  onSubmit,
  children,
  button,
  className,
}: FormProps<T>) {
  const [valid, setValid] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputs = event.currentTarget.getElementsByTagName('input');
    const array = Array.from(inputs);
    const obj = array.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {} as Fields);
    onSubmit(obj as T);
  };

  console.log(formRef.current);

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
      {button}
    </form>
  );
}
