import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <h1 className="text-3xl text-slate-100 font-bold text-center">
      {children}
    </h1>
  );
}

export default Title;
