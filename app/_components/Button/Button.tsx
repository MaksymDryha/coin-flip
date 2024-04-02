import { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps): ReactNode => (
  <button
    className="bg-blue-300 text-white p-2 hover:bg-blue-400"
    onClick={onClick}
  >
    {children}
  </button>
);
