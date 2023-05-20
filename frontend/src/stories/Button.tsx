// Just an example, delete this later
import type { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  onClick(event: MouseEvent<HTMLButtonElement>): void;
  children: ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
}
