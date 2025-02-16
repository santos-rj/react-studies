import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return (
    <button className="bg-slate-400 p-2 rounded-md text-white" {...rest}>
      {children}
    </button>
  );
}

export default Button;
